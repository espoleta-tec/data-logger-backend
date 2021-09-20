import { Repository } from 'typeorm'
import { Request } from 'express'
import { isString } from '@nestjs/common/utils/shared.utils'

/***
 * Prepare apply query filters and sorting behaviours
 * @param repo Repository to build query for
 * @param req Request object from where to extract query params
 */
export function prepareQuery(repo: Repository<any>, req: Request) {
  let queryBuilder = repo.createQueryBuilder('c')

  const filters = req.query.filter as any
  //apply filters to query
  if (filters) {
    const flattened = flattenFilters(filters)

    const customFilters = flattened
      .map((f) => {
        let value = f[f.length - 1]
        const fields = []
        let preQuery = ''
        let operator = ''
        f.slice(1, f.length - 1).map((fi) => {
          if (!fi.startsWith('$')) {
            fields.push(fi)
          } else {
            let word = fi.split('$')[1]
            if (word == 'not') {
              preQuery += ` ${word}`
            } else {
              switch (word) {
                case 'gt': {
                  word = '>'
                  break
                }
                case 'lt': {
                  word = '<'
                  break
                }
                case 'gte': {
                  word = '>='
                  break
                }
                case 'lte': {
                  word = '<='
                  break
                }
              }
              operator = `${operator} ${word}`
            }
          }
        })
        if (operator.length === 0) {
          operator += ' ='
        }

        if (Array.isArray(value)) {
          operator = 'IN'
          value = `(${value
            .map((v) => (isString(v) ? `"${v}"` : v))
            .join(',')})`
        } else {
          value = `"${value}"`
        }

        let latestKey = null
        for (let i = 1; i < fields.length; i++) {
          //load queried relations
          let path = 'c'
          let j
          for (j = 0; j < i; j++) {
            path = `${path}.${fields[j]}`
          }
          const keys = path.split('.')
          const key = `${keys.slice(0, keys.length - 1).join('_')}.${
            keys[keys.length - 1]
          }`
          const alias = path.split('.').join('_')

          //skip existing joints
          if (
            queryBuilder.getQuery().indexOf(`\`${alias}\` ON \`${alias}\``) ===
            -1
          ) {
            queryBuilder = queryBuilder.innerJoinAndSelect(key, alias)
          }
          latestKey = alias
        }

        const query = `${preQuery} ${
          latestKey
            ? `${latestKey}.${fields[fields.length - 1]}`
            : `c.${fields.join('.')}`
        } ${operator} ${value}`
        if (f[0] === '$and') {
          return `AND ${query}`
        } else if (f[0] === '$or') {
          return `OR ${query}`
        }
      })
      .join(' ')

    queryBuilder = queryBuilder.andWhere(
      `(${customFilters.substring(customFilters.indexOf(' '))})`,
    )
  }

  const order = <string | string[]>req.query.order
  //apply order criteria
  if (order) {
    function addOrder(o) {
      let direction: 'ASC' | 'DESC' = 'ASC'
      let column = o
      if (column.startsWith('-')) {
        column = column.substr(1)
        direction = 'DESC'
      }
      queryBuilder = queryBuilder.addOrderBy(`c_${column}`, direction)
    }

    if (Array.isArray(order)) {
      order.map((o) => {
        addOrder(o)
      })
    } else {
      addOrder(order)
    }
  }

  return queryBuilder
}

/***
 * Split all filters into different queries
 * @param filter Filter object to split
 */
function flattenFilters(filter) {
  const result = []

  const route = (subObj, path = []) => {
    let keyIndex = 0
    const keys = Object.keys(subObj)
    if (
      typeof subObj === 'object' &&
      !Array.isArray(subObj) &&
      keys.length > 0
    ) {
      while (keyIndex < keys.length) {
        route(subObj[keys[keyIndex]], [...path, keys[keyIndex]])
        keyIndex++
      }
    } else {
      result.push([...path, subObj])
    }
  }
  route(filter)
  return result
}

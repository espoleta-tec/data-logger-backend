import { In, Repository } from 'typeorm'
import { Request } from 'express'
import { prepareQuery } from '../helpers/queryPreparation'
import { Logger } from '@nestjs/common'

export class CommonServiceService<EntityRepo extends Repository<any>> {
  constructor(public readonly _repository: EntityRepo) {
    this.logger = new Logger()
  }

  async findAll(req: Request) {
    this.logger.log('Finding all')
    let relations = []
    const rels = req.query.relations
    if (rels) {
      if (typeof rels === 'string') {
        relations = [rels]
      } else if (Array.isArray(rels)) {
        relations = rels
      }
    }
    const queryBuilder = prepareQuery(this._repository, req)
    const entities = await queryBuilder.getMany()
    return this._repository.find({
      where: { id: In(entities.map(en => en.id)) },
      relations,
    })
  }

  async findOne(id: number) {
    return this._repository.findOne(id)
  }


  async create(createDto: any) {
    return this._repository.save(createDto)
  }

  async update(id: number, updateDto: any) {
    return this._repository.save(Object.assign(updateDto, { id: id }))
  }

  async remove(id: number) {
    return this._repository.delete(id)
  }

  protected logger: Logger
}

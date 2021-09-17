import { Injectable } from '@nestjs/common'
import { CommonServiceService } from '../../common/common-service/common-service.service'
import { ReadingRepo } from './reading.repo'
import { CreateReadingDto } from './dto/create-reading.dto'

@Injectable()
export class ReadingService extends CommonServiceService<ReadingRepo> {
  constructor(public readonly repo: ReadingRepo) {
    super(repo)
  }


  async create(createDto: CreateReadingDto | CreateReadingDto[]) {
    let queryBuilder = this.repo.createQueryBuilder('c')

    if (!Array.isArray(createDto)) {
      createDto = [createDto]
    }
    createDto.map(({ date, StationId }) => {
      queryBuilder = queryBuilder.orWhere('date = :date AND StationId = :StationId',
        { date, StationId })
    })

    const existentReadings = await queryBuilder.getMany()
    const readingsLeft = createDto.filter(dto =>
      existentReadings.find(eto => eto.id === dto.id) === undefined)


    return super.create(readingsLeft)
  }
}

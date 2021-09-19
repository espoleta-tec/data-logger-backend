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

    if (!Array.isArray(createDto)) {
      createDto = [createDto]
    }

    await super.create(createDto)

    return await this.repo.query('DELETE\n' +
      'FROM reading\n' +
      'WHERE ROWID NOT IN (SELECT min(ROWID)\n' +
      '                    FROM reading\n' +
      '                    GROUP BY date, StationId, temperature, windSpeed, windDirection, humidity, pressure, evapoTranspiration)')
  }
}

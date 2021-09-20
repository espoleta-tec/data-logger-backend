import { Injectable, Logger } from '@nestjs/common'
import { CommonServiceService } from '../../common/common-service/common-service.service'
import { StationRepo } from './station.repo'
import { Station } from './entities/station.entity'

@Injectable()
export class StationService extends CommonServiceService<StationRepo> {
  constructor(public readonly repo: StationRepo) {
    super(repo)
    this.logger = new Logger(StationService.name)
  }

}

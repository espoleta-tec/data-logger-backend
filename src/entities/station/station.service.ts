import { Injectable } from '@nestjs/common'
import { CommonServiceService } from '../../common/common-service/common-service.service'
import { StationRepo } from './station.repo'

@Injectable()
export class StationService extends CommonServiceService<StationRepo> {
  constructor(public readonly repo: StationRepo) {
    super(repo)
  }

}

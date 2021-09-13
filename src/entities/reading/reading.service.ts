import { Injectable } from '@nestjs/common'
import { CommonServiceService } from '../../common/common-service/common-service.service'
import { ReadingRepo } from './reading.repo'

@Injectable()
export class ReadingService extends CommonServiceService<ReadingRepo> {
  constructor(public readonly repo: ReadingRepo) {
    super(repo)
  }
}

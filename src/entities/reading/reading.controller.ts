import { Controller, Logger } from '@nestjs/common'
import { ReadingService } from './reading.service'
import { CommonControllerController } from '../../common/common-controller/common-controller.controller'
import { Reading } from './entities/reading.entity'

@Controller('reading')
export class ReadingController extends CommonControllerController<ReadingService> {
  constructor(private readonly readingService: ReadingService) {
    super(readingService)
    this.logger = new Logger(Reading.name)
  }
}

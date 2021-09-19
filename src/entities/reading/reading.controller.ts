import { Controller, ForbiddenException, Get, Logger, Patch } from '@nestjs/common'
import { ReadingService } from './reading.service'
import { CommonControllerController } from '../../common/common-controller/common-controller.controller'
import { Reading } from './entities/reading.entity'

@Controller('reading')
export class ReadingController extends CommonControllerController<ReadingService> {
  constructor(private readonly readingService: ReadingService) {
    super(readingService)
    this.logger = new Logger(Reading.name)
  }


  @Get()
  async findAll() {
this.logger.log('getting all readings')
    return super.findAll()
  }

  @Patch('id')
  async update(id: number, updateDto: any): Promise<any[]> {
    throw new ForbiddenException()
  }
}

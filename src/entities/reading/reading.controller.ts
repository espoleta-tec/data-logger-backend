import { Controller, ForbiddenException, Patch } from '@nestjs/common'
import { ReadingService } from './reading.service'
import { CommonControllerController } from '../../common/common-controller/common-controller.controller'

@Controller('reading')
export class ReadingController extends CommonControllerController<ReadingService> {
  constructor(private readonly readingService: ReadingService) {
    super(readingService)
  }

  @Patch('id')
  async update(id: number, updateDto: any): Promise<any[]> {
    throw new ForbiddenException()
  }
}

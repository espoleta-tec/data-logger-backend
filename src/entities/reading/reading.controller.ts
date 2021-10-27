import { Controller, Get, Header, Logger, NotFoundException, Param, ParseIntPipe, Req } from '@nestjs/common'
import { ReadingService } from './reading.service'
import { CommonControllerController } from '../../common/common-controller/common-controller.controller'
import { Reading } from './entities/reading.entity'
import { parse } from 'json2csv'

@Controller('reading')
export class ReadingController extends CommonControllerController<ReadingService> {
  constructor(private readonly readingService: ReadingService) {
    super(readingService)
    this.logger = new Logger(Reading.name)
  }

  @Get('csv')
  @Header('Content-Type', 'text/csv')
  async getAllInCSV(@Req() req) {
    const readings = await this.readingService.findAll(req)


    const csv = parse(readings)
    return csv
  }

  @Get('csv/:id')
  @Header('Content-Type', 'text/csv')
  async getOneCsv(@Param('id', ParseIntPipe) id: string, @Req() req) {
    req.query.filter = {
      $and: {
        Station: {
          id: id,
        },
      },
    }
    const readings = await this.readingService.findAll(req)

    if (readings.length === 0) {
      throw new NotFoundException()
    }


    const csv = parse(readings)
    return csv
  }
}

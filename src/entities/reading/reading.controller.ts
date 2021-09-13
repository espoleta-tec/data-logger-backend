import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReadingService } from './reading.service';
import { CreateReadingDto } from './dto/create-reading.dto';
import { UpdateReadingDto } from './dto/update-reading.dto';
import { CommonControllerController } from '../../common/common-controller/common-controller.controller'
import { Reading } from './entities/reading.entity'

@Controller('reading')
export class ReadingController extends CommonControllerController<ReadingService>{
  constructor(private readonly readingService: ReadingService) {
    super(readingService)
  }
}

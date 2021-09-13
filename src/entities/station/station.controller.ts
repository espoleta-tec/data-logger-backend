import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StationService } from './station.service';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';
import { CommonControllerController } from '../../common/common-controller/common-controller.controller'

@Controller('station')
export class StationController extends CommonControllerController<StationService>{
  constructor(private readonly stationService: StationService) {
    super(stationService)
  }
}

import { Module } from '@nestjs/common'
import { StationService } from './station.service'
import { StationController } from './station.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { StationRepo } from './station.repo'
import { StationSettings } from './entities/station-settings.entity'

@Module({
  imports: [TypeOrmModule.forFeature([StationRepo, StationSettings])],
  controllers: [StationController],
  providers: [StationService],
})
export class StationModule {
}

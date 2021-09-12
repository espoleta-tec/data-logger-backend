import { Module } from '@nestjs/common';
import { StationModule } from './station/station.module';
import { ReadingModule } from './reading/reading.module';

@Module({
  imports: [StationModule, ReadingModule]
})
export class EntitiesModule {}

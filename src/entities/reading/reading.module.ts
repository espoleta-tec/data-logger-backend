import { Module } from '@nestjs/common'
import { ReadingService } from './reading.service'
import { ReadingController } from './reading.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ReadingRepo } from './reading.repo'

@Module({
  imports: [TypeOrmModule.forFeature([ReadingRepo])],
  controllers: [ReadingController],
  providers: [ReadingService],
})
export class ReadingModule {
}

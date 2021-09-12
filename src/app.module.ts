import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { EntitiesModule } from './entities/entities.module';


@Module({
  imports: [CommonModule, EntitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}

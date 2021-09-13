import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CommonModule } from './common/common.module'
import { EntitiesModule } from './entities/entities.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'


@Module({
  imports: [CommonModule, EntitiesModule, ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'client'),
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}

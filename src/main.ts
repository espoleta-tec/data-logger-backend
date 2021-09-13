import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Logger } from '@nestjs/common'
import * as open from 'open'


async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api')
  return app.listen(process.env.NODE_ENV === 'development' ? 4000 : 0)
}

bootstrap().then(async (app) => {
  new Logger('APP').log('Server started')
  await open(`http://127.0.0.1:${app.address().port}`)
})

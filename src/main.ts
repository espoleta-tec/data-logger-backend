import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Logger } from '@nestjs/common'
import * as open from 'open'
import * as bodyParser from 'body-parser'

const logger = new Logger('Application')

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.use(bodyParser.json({ limit: '50mb' }))
  app.use(bodyParser.urlencoded({ limit: '50mb' }))
  app.setGlobalPrefix('api')
  return app.listen(process.env.NODE_ENV === 'development' ? 4000 : 0)
}

bootstrap().then(async (app) => {
  logger.log('Server started')
  if (process.env.NODE_ENV !== 'development') {
    await open(`http://127.0.0.1:${app.address().port}`)
  }
  logger.log(app.address().port)
})

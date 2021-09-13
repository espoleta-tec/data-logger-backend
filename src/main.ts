import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const PORT = 4000

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api')
  await app.listen(PORT)
}

bootstrap().then(async () => {
  console.log('Server started')
  // await open(`http://127.0.0.1:${PORT}`)
})

import { Controller, Get, Logger } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    this.logger = new Logger('APP')
  }

  @Get('shutdown')
  getHello(): string {
    this.logger.log('Shutting Down')
    return process.exit(0)
  }

  private logger: Logger
}

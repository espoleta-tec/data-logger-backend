import { Body, Delete, Get, Logger, Param, ParseIntPipe, Patch, Post } from '@nestjs/common'
import { CommonServiceService } from '../common-service/common-service.service'

export class CommonControllerController<EntityService extends CommonServiceService<any>> {
  constructor(private readonly service: EntityService) {
  }


  @Get()
  async findAll() {
    return this.service.findAll()
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(+id)
  }

  @Post('')
  async create(@Body() createDto: any) {
    return this.service.create(createDto)
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number,@Body() updateDto: any) {
    return this.service.update(id, updateDto)
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id)
  }

  protected logger: Logger
}

import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'

export class CommonServiceService<EntityRepo extends Repository<any>> {
  constructor(public readonly _repository: EntityRepo) {
  }

  async findAll() {
    return this._repository.find()
  }

  async findOne(id: number) {
    return this._repository.findOne(id)
  }


  async create(createDto: any) {
    return this._repository.save(createDto)
  }

  async update(id: number, updateDto: any) {
    return this._repository.update(id, updateDto)
  }

  async remove(id: number) {
    return this._repository.delete(id)
  }
}

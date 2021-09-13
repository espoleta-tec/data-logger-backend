import { EntityRepository, Repository } from 'typeorm'
import { Reading } from './entities/reading.entity'

@EntityRepository(Reading)
export class ReadingRepo extends Repository<Reading> {

}

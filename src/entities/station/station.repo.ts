import { EntityRepository, Repository } from 'typeorm'
import { Station } from './entities/station.entity'

@EntityRepository(Station)
export class StationRepo extends Repository<Station> {

}

import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Station } from './station.entity'

@Entity()
export class StationSettings {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(() => Station, (station) => station.Settings)
  Station: Station

  @Column()
  generalReadDelay: number

  @Column()
  precipitationReadDelay: number

  @Column()
  username: string

  @Column()
  password: string
}

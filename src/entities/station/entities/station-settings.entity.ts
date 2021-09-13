import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Station } from './station.entity'

@Entity()
export class StationSettings {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(() => Station, (station) => station.Settings)
  Station: Station

  @Column({ default: 0 })
  generalReadDelay: number

  @Column({ default: 0 })
  precipitationReadDelay: number

  @Column({ default: 'admin' })
  username: string

  @Column({ default: 'adminpassword' })
  password: string
}

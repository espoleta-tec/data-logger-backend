import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { StationSettings } from './station-settings.entity'
import { OperationModeEnum } from '../types/operation-mode.enum'
import { Reading } from '../../reading/entities/reading.entity'

@Entity()
export class Station {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ default: null })
  ip: string

  @Column({ default: null })
  ipMask: string

  @Column({ default: null })
  ssid: string

  @Column({ default: null })
  password: string

  @Column()
  hostname: string

  @Column('text', {
    default: OperationModeEnum.AP,
  })
  connectionMode: OperationModeEnum

  @OneToOne(() => StationSettings,
    (settings) => settings.Station,
    { cascade: ['insert', 'update', 'remove', 'recover'], eager: true })
  @JoinColumn()
  Settings: StationSettings

  @OneToMany(() => Reading, (reading) => reading.Station, { eager: true })
  Readings: Reading[]

  @Column({ default: '0.0.1' })
  version: string
}

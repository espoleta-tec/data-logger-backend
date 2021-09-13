import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { StationSettings } from './station-settings.entity'
import { OperationModeEnum } from '../types/operation-mode.enum'
import { String2ObjectTransformer } from '../../../common/transfomers/string-2-object.transformer'

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

  @Column({ default: null })
  hostname: string

  @Column({
    type: 'text', transformer: new String2ObjectTransformer<OperationModeEnum>(),
    default: OperationModeEnum.AP,
  })
  connectionMode: OperationModeEnum

  @OneToOne(() => StationSettings,
    (settings) => settings.Station,
    { cascade: true, eager: true })
  @JoinColumn()
  Settings: StationSettings
}

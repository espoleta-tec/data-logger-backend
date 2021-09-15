import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Station } from '../../station/entities/station.entity'

@Entity()
export class Reading {
  @PrimaryGeneratedColumn()
  id: number

  @Column('double', { default: null })
  temperature: number

  @Column('double', { default: null })
  windSpeed: number

  @Column({ default: null })
  windDirection: string

  @Column('double', { default: null })
  humidity: number

  @Column('double', { default: null })
  pressure: number

  @Column('double', { default: null })
  transpiration: number

  @ManyToOne(() => Station, (station) => station.Readings)
  Station: Station

  @Column('datetime')
  timestamp: Date

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}

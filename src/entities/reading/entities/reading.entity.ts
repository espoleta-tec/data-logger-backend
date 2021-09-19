import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
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
  evapoTranspiration: number

  @Column({ nullable: true })
  StationId: number

  @ManyToOne(() => Station, (station) => station.Readings, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'StationId' })
  Station: Station

  @Column('datetime')
  date: Date

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}

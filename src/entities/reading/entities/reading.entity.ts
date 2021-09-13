import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

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
}

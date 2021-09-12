import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Station {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  ip: string

  ipMask: string

  @Column()
  ssid: string

  @Column()
  password: string

  @Column()
  hostname: string
}

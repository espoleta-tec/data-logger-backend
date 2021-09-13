import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'data/variables.sqlite',
      logging: true,
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class CommonModule {
}

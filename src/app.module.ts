import { Module } from '@nestjs/common';
import { ActivityModule } from './activity/activity.module';
import { ProgramModule } from './program/program.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParticipationModule } from './participation/participation.module';
import { Program } from './program/entities/program.entity';
import { Participation } from './participation/entities/participation.entity';
import { Activity } from './activity/entities/activity.entity';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        username: 'root',
        password: '1234',
        database: 'db',
        port: 3306,
        entities: [
          Program,
          Participation,
          Activity
        ],
        namingStrategy: new SnakeNamingStrategy(),
        // migrations: ''
      }),
      ActivityModule,
      ProgramModule,
      ParticipationModule
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}

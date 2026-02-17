import { Module } from '@nestjs/common';
import { ActivityModule } from './activity/activity.module';
import { ProgramModule } from './program/program.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParticipationModule } from './participation/participation.module';

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        database: '',
        entities: [__dirname + '/**/*.entity.ts'],
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

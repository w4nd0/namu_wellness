import { Module } from '@nestjs/common';
import { ActivityModule } from './activity/activity.module';
import { ProgramModule } from './program/program.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParticipationModule } from './participation/participation.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigService } from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfigService,
    }),
    ActivityModule,
    ProgramModule,
    ParticipationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

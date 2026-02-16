import { Module } from '@nestjs/common';
import { ActivityModule } from './activity/activity.module';
import { ProgramModule } from './program/program.module';

@Module({
  imports: [ActivityModule, ProgramModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

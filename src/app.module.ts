import { Module } from '@nestjs/common';
import { ActivityModule } from './activity/activity.module';

@Module({
  imports: [ActivityModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

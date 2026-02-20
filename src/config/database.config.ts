import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Activity } from 'src/activity/entities/activity.entity';
import { Migration1771603303113 } from 'src/db/migrations/1771603303113-migration';
import { Participation } from 'src/participation/entities/participation.entity';
import { Program } from 'src/program/entities/program.entity';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      port: Number(this.configService.get<number>('DB_PORT')),
      username: this.configService.get<string>('DB_USERNAME'),
      password: this.configService.get<string>('DB_PASSWORD'),
      database: this.configService.get<string>('DB_NAME'),
      entities: [Program, Participation, Activity],
      synchronize: false,
      namingStrategy: new SnakeNamingStrategy(),
      migrations: [Migration1771603303113],
    };
  }
}

import { DayOfWeek } from '../../activity/dto/create-activity.dto';
import { Category } from '../../program/dto/create-program.dto';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Migration1771603303113 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'activities',
        columns: [
          {
            name: 'id',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
            isNullable: false,
            type: 'integer',
          },
          {
            name: 'title',
            isNullable: false,
            type: 'varchar',
          },
          {
            name: 'description',
            isNullable: false,
            type: 'varchar',
          },
          {
            name: 'day-of-week',
            isNullable: false,
            type: 'varchar',
            enum: [...Object.values(DayOfWeek)],
          },
          {
            name: 'duration_minutes',
            isNullable: false,
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['program_id'],
            referencedTableName: 'programs',
            referencedColumnNames: ['id'],
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'participations',
        columns: [
          {
            name: 'id',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
            isNullable: false,
            type: 'integer',
          },
          {
            name: 'user_name',
            isNullable: false,
            type: 'varchar',
          },
          {
            name: 'completed_at',
            isNullable: false,
            type: 'varchar',
          },
          {
            name: 'notes',
            isNullable: false,
            type: 'varchar',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['activity_id'],
            referencedTableName: 'activities',
            referencedColumnNames: ['id'],
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'programs',
        columns: [
          {
            name: 'id',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
            isNullable: false,
            type: 'integer',
          },
          {
            name: 'name',
            isNullable: false,
            type: 'varchar',
          },
          {
            name: 'description',
            isNullable: false,
            type: 'varchar',
          },
          {
            name: 'day-of-week',
            isNullable: false,
            type: 'varchar',
            enum: [...Object.values(Category)],
          },
          {
            name: 'duration_weeks',
            isNullable: false,
            type: 'integer',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}

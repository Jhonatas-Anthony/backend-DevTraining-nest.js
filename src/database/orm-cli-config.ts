import { DataSource, DataSourceOptions } from 'typeorm';
import { CreateCoursesTable1718197172385 } from 'src/migrations/1718197172385-CreateCoursesTable';
import { CreateTagsTable1718199702417 } from 'src/migrations/1718199702417-CreateTagsTable';
import { CreateCoursesTagsTable1718207634898 } from 'src/migrations/1718207634898-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1718208150313 } from 'src/migrations/1718208150313-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1718209182570 } from 'src/migrations/1718209182570-AddTagsIdToCoursesTagsTable';
import { Course } from 'src/courses/entities/courses.entity';
import { Tag } from 'src/courses/entities/tags.entity';
import 'dotenv/config';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Course, Tag],
  synchronize: false,
};

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1718197172385,
    CreateTagsTable1718199702417,
    CreateCoursesTagsTable1718207634898,
    AddCoursesIdToCoursesTagsTable1718208150313,
    AddTagsIdToCoursesTagsTable1718209182570,
  ],
});

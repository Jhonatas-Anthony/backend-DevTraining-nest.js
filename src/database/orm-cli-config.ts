import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1718197172385 } from 'src/migrations/1718197172385-CreateCoursesTable';
import { CreateTagsTable1718199702417 } from 'src/migrations/1718199702417-CreateTagsTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [CreateCoursesTable1718197172385, CreateTagsTable1718199702417],
});

import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddCoursesIdToCoursesTagsTable1718208150313
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'courses_tags_tags',
      new TableColumn({
        name: 'coursesId',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'courses_tags_tags',
      new TableForeignKey({
        name: 'courses_tags_courses',
        columnNames: ['coursesId'],
        referencedTableName: 'courses',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'courses_tags_tags',
      'courses_tags_courses',
    );
    await queryRunner.dropColumn('ccourses_tags_tags', 'coursesId');
  }
}

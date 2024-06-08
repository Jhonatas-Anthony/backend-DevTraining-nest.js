import { Injectable } from '@nestjs/common';
import { Course } from './courses.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Nestjs',
      description: 'Curso sobre fundamentos do nestjs',
      tags: ['node.js', 'nest.js', 'javascript', 'typescript'],
    },
  ];
}

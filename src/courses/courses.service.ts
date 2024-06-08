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

  findAll() {
    return this.courses;
  }

  find(id: number) {
    return this.courses.find((course) => course.id === id);
  }

  // TODO Mudar para DTO depois
  create(data: any) {
    this.courses.push(...data);
  }

  // TODO Mudar para DTO depois
  update(id: number, data: any) {
    const existingCourse = this.find(id);
    if (existingCourse) {
      const index = this.courses.findIndex((course) => course.id === id);
      this.courses[index] = {
        id,
        ...data,
      };
    }
  }

  remove(id: number) {
    const index = this.courses.findIndex((course) => course.id === id);
    if (index >= 0) {
      this.courses.splice(index, 1);
    }
  }
}

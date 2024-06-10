import { Injectable, NotFoundException } from '@nestjs/common';
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

  findOne(id: number) {
    const course = this.courses.find((course) => course.id === id);
    if (!course) {
      throw new NotFoundException(`Course Id ${id} not found`);
    }
    return course;
  }

  create(data: any) {
    this.courses.push(data);
    return data;
  }

  update(id: number, data: any) {
    const existingCourse = this.findOne(id);
    console.log(this.findOne(id));
    if (existingCourse as any) {
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

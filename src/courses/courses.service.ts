import { Injectable, NotFoundException } from '@nestjs/common';
import { Course } from './entities/courses.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}

  async findAll() {
    return await this.courseRepository.find();
  }

  async findOne(id: number) {
    const course = await this.courseRepository.findOne({
      where: { id: id },
    });
    if (!course) {
      throw new NotFoundException(`Course Id ${id} not found`);
    }
    return course;
  }

  async create(data: any) {
    const course = this.courseRepository.create(data);
    return this.courseRepository.save(course);
  }

  async update(id: number, data: any) {
    const course = await this.courseRepository.preload({ ...data, id: id });

    if (!course) {
      throw new NotFoundException(`Course Id ${id} not found`);
    }

    return this.courseRepository.save(course);
  }

  async remove(id: number) {
    const course = await this.courseRepository.findOne({
      where: { id: id },
    });

    if (!course) {
      throw new NotFoundException(`Course Id ${id} not found`);
    }

    return this.courseRepository.remove(course);
  }
}

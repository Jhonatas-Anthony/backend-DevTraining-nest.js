import { Injectable, NotFoundException } from '@nestjs/common';
import { Course } from './entities/courses.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from './entities/tags.entity';
import { CreateCourseDTO } from './dto/create-courses.dto';
import { UpdateCourseDTO } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,

    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
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

  async create(data: CreateCourseDTO) {
    const tags = await Promise.all(
      data.tags.map((name) => this.preloadTagByName(name)),
    );

    const course = this.courseRepository.create({ ...data, tags });
    return this.courseRepository.save(course);
  }

  async update(id: number, data: UpdateCourseDTO) {
    const tags =
      data.tags &&
      (await Promise.all(data.tags.map((name) => this.preloadTagByName(name))));

    const course = await this.courseRepository.preload({
      ...data,
      id: id,
      tags,
    });

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

  private async preloadTagByName(name: string): Promise<Tag> {
    const tag = await this.tagRepository.findOne({ where: { name: name } });
    if (tag) {
      return tag;
    }
    return this.tagRepository.create({ name: name });
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDTO } from './dto/create-courses.dto';
import { UpdateCourseDTO } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly courseService: CoursesService) {}

  @Get()
  findAll() {
    return this.courseService.findAll();
  }

  @Get('find/:id')
  findOne(@Param('id') id: string) {
    return this.courseService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateCourseDTO) {
    return this.courseService.create(body);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() body: UpdateCourseDTO) {
    return this.courseService.update(id, body);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.courseService.remove(id);
  }
}

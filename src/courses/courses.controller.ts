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

@Controller('courses')
export class CoursesController {
  constructor(private readonly courseService: CoursesService) {}

  @Get()
  findAll() {
    //return response.status(200).send('Listagem de cursos');
    return this.courseService.findAll();
  }

  @Get('find/:id')
  findOne(@Param('id') id: number) {
    return this.courseService.findOne(Number(id));
  }

  // @HttpCode(204) Usado para excluir recursos
  @Post()
  create(@Body() body) {
    return this.courseService.create(body);
  }

  @Put('update/:id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.courseService.update(id, body);
  }

  //@HttpCode(204)
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('delete/:id')
  remove(@Param('id') id: number) {
    return this.courseService.remove(id);
  }
}

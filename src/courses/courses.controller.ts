import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll() {
    return 'Listagem de cursos';
  }

  @Get('find/:id')
  findOne(@Param('id') id: string) {
    return 'Return obj ' + id;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  // Com desconstrução: findOne(@Param('id') id: string)
  // Sem: findOne(@Param() params) -> params.id
}

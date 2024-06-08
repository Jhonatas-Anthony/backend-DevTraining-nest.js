import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll(@Res() response) {
    //return response.status(200).send('Listagem de cursos');
    return response.status(200).json({ message: 'Listagem de cursos' });
  }

  @Get('find/:id')
  // Com desconstrução: findOne(@Param('id') id: string)
  // Sem: findOne(@Param() params) -> params.id
  findOne(@Param('id') id: string) {
    return 'Return obj ' + id;
  }

  // @HttpCode(204) Usado para excluir recursos
  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() body: any) {
    console.log(body);
    return `Update course with id ${id}`;
  }

  //@HttpCode(204)
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return `Delete course with id ${id}`;
  }
}

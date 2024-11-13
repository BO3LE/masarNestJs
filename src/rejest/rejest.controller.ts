import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RejestService } from './rejest.service';
import { CreateRejestDto } from './dto/create-rejest.dto';
import { UpdateRejestDto } from './dto/update-rejest.dto';
import { faker } from '@faker-js/faker';
import { DataSource } from 'typeorm';


@Controller('rejest')
export class RejestController {
  constructor(private readonly rejestService: RejestService) {}

  @Post()
  create(@Body() createRejestDto: CreateRejestDto) {
    return this.rejestService.create(createRejestDto);
  }

  @Get()
  findAll() {
    return this.rejestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rejestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRejestDto: UpdateRejestDto) {
    return this.rejestService.update(+id, updateRejestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rejestService.remove(+id);
  }

  // @Post('/fillUsers')
  // async fillUsers() {
  //   const usersRepo = this.dataSourse.getRepository('User');
  //   const users = Array.from({ length: 1000 }, () => ({
  //     name: faker.internet.userName(),
  //     email: faker.internet.email(),
  //   }));
  //   await usersRepo.save(users);

  //   return 'done';
  // }
}

import { Injectable } from '@nestjs/common';
import { CreateRejestDto } from './dto/create-rejest.dto';
import { UpdateRejestDto } from './dto/update-rejest.dto';
import {InjectRepository} from '@nestjs/typeorm';
import { Rejest } from './entities/rejest.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RejestService {
  constructor(@InjectRepository(Rejest) private rejestRepo: Repository<Rejest>){}

  async create(createRejestDto: CreateRejestDto) {
    const res = await this.rejestRepo.save(createRejestDto);

    return 'This action adds a new rejest' + res;
  }

  findAll() {
    const allRejust = this.rejestRepo.find();
    return allRejust;
  }

  findOne(id: number) {
    return `This action returns a #${id} rejest`;
  }

  async update(id: number, updateRejestDto: UpdateRejestDto) {
    const exsistRejest = await this.rejestRepo.findOneBy({ id:id});

    exsistRejest.firstName = updateRejestDto.firstName;
    const updatedPayment = await this.rejestRepo.save(exsistRejest);
    
    return updatedPayment;
  }

  async remove(id: number) {
    const deletePyment = await this.rejestRepo.delete(id);
    return `This action removes a #${id} rejest`;
  }
}

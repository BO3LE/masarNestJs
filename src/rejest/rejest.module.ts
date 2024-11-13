import { Module } from '@nestjs/common';
import { RejestService } from './rejest.service';
import { RejestController } from './rejest.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Rejest } from './entities/rejest.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rejest])],
  controllers: [RejestController],
  providers: [RejestService],
})
export class RejestModule {}

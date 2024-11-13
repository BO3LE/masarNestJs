import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RejestModule } from './rejest/rejest.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rejest } from './rejest/entities/rejest.entity';


@Module({
  imports: [RejestModule , 
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'masat-test',
    //entities: [Rejest],
    autoLoadEntities: true,
    synchronize: false,
    logging:false
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

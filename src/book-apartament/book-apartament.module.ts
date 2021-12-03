import { Module } from '@nestjs/common';
import { BookApartamentService } from './book-apartament.service';
import { BookApartamentController } from './book-apartament.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsSchema } from '../map/etity/pinktada.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entity/user.entity';
import { BookApartamentsEntity } from './entity/BookApartaments.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:'items', schema:ItemsSchema}]),TypeOrmModule.forFeature([User, BookApartamentsEntity])],
  providers: [BookApartamentService],
  controllers: [BookApartamentController]
})
export class BookApartamentModule {}

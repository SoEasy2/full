import { Module } from '@nestjs/common';
import { FauvoriteApartamentService } from './fauvorite-apartament.service';
import { FauvoriteApartamentController } from './fauvorite-apartament.controller';
import { User } from '../user/entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsSchema } from '../map/etity/pinktada.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { FavouriteAppartamentsEntity } from './entity/fauvorite-apartament-entity.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:'items', schema:ItemsSchema}]),TypeOrmModule.forFeature([User, FavouriteAppartamentsEntity])],
  providers: [FauvoriteApartamentService],
  controllers: [FauvoriteApartamentController]
})
export class FauvoriteApartamentModule {}

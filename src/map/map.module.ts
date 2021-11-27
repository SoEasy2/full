import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MapController } from './map.controller';
import { MapService } from './map.service';
import {ItemsSchema} from './pinktada.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'items', schema:ItemsSchema}])],
  controllers: [MapController],
  providers: [MapService]
})
export class MapModule {}

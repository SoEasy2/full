import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsSchema } from './etity/pinktada.schema';
import { MapController } from './map.controller';
import { MapService } from './map.service';


@Module({
  imports:[MongooseModule.forFeature([{name:'items', schema:ItemsSchema}])],
  controllers: [MapController],
  providers: [MapService]
})
export class MapModule {}

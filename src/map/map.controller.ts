import { Body, Param } from '@nestjs/common';
import { Controller, Get, Post } from '@nestjs/common';
import { ICord } from './dto/coord-dto';
import { MapService } from './map.service';

@Controller('api/map')
export class MapController {
    constructor(private mapService:MapService) {}

    @Post()
    getAll(@Body() dto:ICord){
        return this.mapService.getApp(dto)
    }
    @Get(':id')
    getOne(@Param('id') id:string){
        return this.mapService.getOne(id)
    }
}

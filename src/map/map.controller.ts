import { Body, Param } from '@nestjs/common';
import { Controller, Get, Post } from '@nestjs/common';
import {ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ICord } from './dto/coord-dto';
import { MapService } from './map.service';

@ApiTags('map')
@Controller('api/map')
export class MapController {
    constructor(private mapService:MapService) {}

    @ApiOperation({summary:'Get all houses in the radius'})
    @ApiResponse({status:200})
    @ApiBody({type:ICord, description:'Coords and zoom'})
    @Post()
    getAll(@Body() dto:ICord){
        return this.mapService.getApp(dto)
    }
    @ApiOperation({summary:'Get apartament by id'})
    @ApiResponse({status:200})
    @ApiBody({type:String})
    @Get(':id')
    getOne(@Param('id') id:string){
        return this.mapService.getOne(id)
    }
}

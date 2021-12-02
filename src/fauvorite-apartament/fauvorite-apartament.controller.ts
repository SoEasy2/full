import { Get, Param } from '@nestjs/common';
import {Body, Controller, Post } from '@nestjs/common';
import {ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ICheckFavouriteDto } from './dto/check-favourite.dto';
import { FauvoriteApartamentService } from './fauvorite-apartament.service';

@ApiTags('fauvorite-apartament')
@Controller('api/fauvorite-apartament/')
export class FauvoriteApartamentController {
    constructor(private favouriteController:FauvoriteApartamentService) {
    }
    @ApiOperation({summary:'Check user`s favorites apartament'})
    @ApiResponse({status:200})
    @ApiBody({type:ICheckFavouriteDto, description:'User'})
    @Post('check')
    checking(@Body() dto:ICheckFavouriteDto){
        return this.favouriteController.checkFavoritee(dto)
    }
    @Get(':email')
    getFavourite(@Param('email') email:string){
        return this.favouriteController.getFavouriteAppartament(email)
    }
}

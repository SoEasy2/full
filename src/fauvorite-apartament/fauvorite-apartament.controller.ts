import { Get, Param } from '@nestjs/common';
import {Body, Controller, Post } from '@nestjs/common';
import { ICheckFavouriteDto } from './dto/check-favourite.dto';
import { FauvoriteApartamentService } from './fauvorite-apartament.service';

@Controller('api/fauvorite-apartament/')
export class FauvoriteApartamentController {
    constructor(private favouriteController:FauvoriteApartamentService) {
    }
    @Post('check')
    checking(@Body() dto:ICheckFavouriteDto){
        return this.favouriteController.checkFavoritee(dto)
    }
    @Get(':email')
    getFavourite(@Param('email') email:string){
        return this.favouriteController.getFavouriteAppartament(email)
    }
}

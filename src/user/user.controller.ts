import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "../dto/create-user.dto";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {User} from "../entities/user.entity";
import { ICheckFavouriteDto } from 'src/dto/check-favourite.dto';

@Controller('api/user')
export class UserController {
    constructor(private userController:UserService) {
    }

    @Get()
    @ApiOperation({summary:'Getting all users'})
    @ApiResponse({status:200, type:[User]})
    @UseGuards(JwtAuthGuard)
    findAll(){
        return this.userController.findAll()
    }
    @ApiOperation({summary:'User creation'})
    @ApiResponse({status:200, type:User})
    @Post()
    create(@Body() dto:CreateUserDto){
        return this.userController.createUser(dto)
    }
    @Post('/check')
    checking(@Body() dto:ICheckFavouriteDto){
            return this.userController.checkFavoritee(dto)
    }
    @Get(':id')
    findOne(@Param('id') id:string){
        return this.userController.findOne(id)
    }
    @Get('/fauvorite/:email')
    getFavourite(@Param('email') email:string){
        return this.userController.getFavouriteAppartament(email)
    }


}

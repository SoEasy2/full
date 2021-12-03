import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {UserService} from "./user.service";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';
@ApiTags('user')
@Controller('api/user')
export class UserController {
    constructor(private userService:UserService) {
    }

    @Get()
    @ApiOperation({summary:'Getting all users'})
    @ApiResponse({status:200, type:[User]})
   // @UseGuards(JwtAuthGuard)
    async findAll(){
        return this.userService.findAll()
    }
    @ApiOperation({summary:'User creation'})
    @ApiResponse({status:200, type:User})
    @ApiBody({type:CreateUserDto})
    @Post()
    async create(@Body() dto:CreateUserDto){
        return this.userService.createUser(dto)
    }
    @ApiOperation({summary:'Get user by id'})
    @ApiResponse({status:200, type:User})
    @Get(':id')
    findOne(@Param('id') id:string){
        return this.userService.findOne(id)
    }
}

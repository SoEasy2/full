import {Body, Controller, Get, HttpException, HttpStatus, Param, Post, Redirect} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {ConfirmService} from "../confirm/confirm.service";
import {Response, Request} from 'express'
import { Res } from '@nestjs/common';
import { Req } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { ResetPasswordDto } from '../user/dto/reset-password.dto';
import {ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('api/auth')
export class AuthController {
    constructor(private authService:AuthService,
                private confirmService:ConfirmService) {
    }
    @ApiOperation({summary:'User authorization'})
    @ApiResponse({status:200})
    @ApiBody({type:CreateUserDto})
    @Post("/login")
    async login(@Body() userDto:CreateUserDto,
                @Res({passthrough:true}) response:Response){
        const userData = await this.authService.login(userDto)
        response.cookie('refresh_token', userData.tokens.refreshToken, {maxAge:30*24*60*60*1000, httpOnly:true})
        return userData
    }
    @ApiOperation({summary:'User logout'})
    @ApiResponse({status:200})
    @Post("/logout")
    async logout(@Req() request:Request,
                 @Res() response:Response){
        const {refreshToken} = request.cookies
        const temp = refreshToken.split(' ')
        console.log(temp)

        const token = await this.authService.logout(temp[1])
        response.clearCookie('refreshToken')
        console.log(true)
        return response.json(token)
    }
    @ApiOperation({summary:'Check user'})
    @ApiResponse({status:200})
    @Post('/check')
    async chechUser(@Req() request:Request,
                    @Res() response:Response){
        const {refreshToken} = request.cookies;
        const user = await this.authService.checkUser(refreshToken);
        return response.json(user)
    }
    @ApiOperation({summary:'User register'})
    @ApiResponse({status:200})
    @ApiBody({type:CreateUserDto})
    @Post("/register")
    async registration(@Body() userDto:CreateUserDto,
                 @Res({passthrough:true}) response:Response){
        const userData = await this.authService.registration(userDto)
        response.cookie('refreshToken', userData.refreshToken, {maxAge:30*24*60*60*1000, httpOnly:true})
        return userData
    }
    @ApiOperation({summary:'Verify account'})
    @ApiResponse({status:200})
    @ApiBody({type:String, description:'Token confirm'})
    @Get('/verify/:token')
    @Redirect('http://localhost:3000/')
    verifyEmail(@Param('token')token:string){
        return this.confirmService.verifyEmail(token)
    }
    @ApiOperation({summary:'User authorization'})
    @ApiResponse({status:200})
    @ApiBody({type:CreateUserDto})
    @Get('/forget-password/:email')
    sendEmailForgotPassword(@Param('email')email:string){
        return this.authService.sendEmailForgottenPassword(email)

    }
    @ApiOperation({summary:'Password recovery'})
    @ApiResponse({status:200})
    @ApiBody({type:ResetPasswordDto})
    @Post('/reset-password')
    setNewPassword(@Body() resetPassword:ResetPasswordDto){
        return this.authService.setNewPassword(resetPassword)
    }
}

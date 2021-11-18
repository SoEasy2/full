import {Body, HttpException, HttpStatus, Injectable, Post, UnauthorizedException} from '@nestjs/common';
import {CreateUserDto} from "../dto/create-user.dto";
import {UserService} from "../user/user.service";
import {JwtService} from "./jwt.service";
import * as bcrypt from "bcryptjs"
import {User} from "../entities/user.entity";
import {MailService} from "../mail/mail.service";
import {ConfirmService} from "../confirm/confirm.service";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {ForgottenPasswordEntityEntity} from "../entities/ForgottenPasswordEntity.entity";
import {ResetPasswordDto} from "../dto/reset-password.dto";
import {UserTokenDto} from "../dto/user-token.dto"

@Injectable()
export class AuthService {

    constructor(@InjectRepository(User) private userRepository:Repository<User>,
                private mailerService:MailService,
                @InjectRepository(ForgottenPasswordEntityEntity) private forgottenPassword:Repository<ForgottenPasswordEntityEntity>,
                private userService:UserService,
                private jwtService:JwtService,
                private mailService:MailService,
                private confirmService:ConfirmService) {
    }
    async login(userDto:CreateUserDto){
        const userFromDb = await this.userRepository.findOne({where:{email:userDto.email}})
        console.log(userFromDb)
        if(!userFromDb) throw new HttpException('LOGIN.USER_NOT_FOUND', HttpStatus.NOT_FOUND);
        if(!userFromDb.valid) throw new HttpException('LOGIN.EMAIL_NOT_VERIFIED', HttpStatus.FORBIDDEN)
        const isValidPass = await bcrypt.compare(userDto.password, userFromDb.password);
        if(isValidPass){
            const userDtoTokens = new UserTokenDto(userFromDb)
            const tokens = await this.jwtService.generateTokens({...userDtoTokens});
            await this.jwtService.saveToken(userFromDb.id, tokens.refreshToken)
            return {tokens, user:userDtoTokens}
        } throw new HttpException('LOGIN.USER_NOT_CORRECT', HttpStatus.BAD_REQUEST)
    }
    async registration(userDto:CreateUserDto){
        const candidate = await this.userService.getUserByEmail(userDto.email);
        if (candidate){
            throw new HttpException('User is found', HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5);
        const user = await this.userService.createUser({...userDto, password:hashPassword})
        const token =(Math.floor(Math.random() * (90000000)) + 10000000).toString();
        await this.confirmService.createTokenConfirm(token,user);
        await this.mailService.sendUserConfirmation(user,token);
        const userDtoTokens = new UserTokenDto(user);
        const tokens = this.jwtService.generateTokens({...userDtoTokens, valid:false})
        await this.jwtService.saveToken(userDtoTokens.id, tokens.refreshToken)
        return {
            ...tokens,
            ...userDtoTokens
        }
    }

    async logout(refreshToken:string){
        const token = await this.jwtService.removeToken(refreshToken)
        return null;
    }
    async checkUser(refreshToken:string){
        try{
            const token = refreshToken.split(' ')
            const user = await this.userRepository.findOne({where:{refreshToken:token[1]}})
            if (!user) { return null}
            const userDto = new UserTokenDto(user)
            return userDto;
        }catch (e) {
            return null
        }

    }
    async
    async createForgottenPassword(email:string){
        const user = await this.userRepository.findOne({where:{email:email}})
        console.log('tuta')
        if(user.forgottenPassword && (new Date().getTime()-user.forgottenPassword.timestap.getTime())) throw new HttpException('RESET_PASSWORD.EMAIL_SENDED_RECENTLY', HttpStatus.INTERNAL_SERVER_ERROR)
        else{
            const forgottenPassword = {
                timestap:new Date(),
                newPasswordToken:(Math.floor(Math.random() * (9000000)) + 1000000).toString(),
                user:user
            }
            const forgottenPasswordModel = await this.forgottenPassword.save(forgottenPassword)
            if (forgottenPasswordModel){
                return forgottenPasswordModel;
            } else{
                throw new HttpException('LOGIN.ERROR.GENERIC_ERROR', HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }

    async getForgottenPassword(newPasswordToken:string){
        console.log('tut')
         return await this.forgottenPassword.findOne({where:{newPasswordToken:newPasswordToken}})
    }
    async sendEmailForgottenPassword(email:string){
        const user = await this.userRepository.findOne({where:{email:email}})
        if(!user) throw new HttpException('LOGIN.USER_NOT_FOUND', HttpStatus.NOT_FOUND)
        const token = await this.createForgottenPassword(user.email)
        console.log(token.newPasswordToken)
        if(token && token.newPasswordToken){
            return this.mailService.sendUserForgottenPassword(user, token.newPasswordToken)
        }
        else{
            throw new HttpException('REGISTER.USER_NOT_REGISTRED', HttpStatus.FORBIDDEN)
        }
    }
    async checkPassword(email:string, password:string){
        const user = await this.userRepository.findOne({where:{email:email}})
        if(!user) throw new HttpException('LOGIN.USER_NOT_FOUND', HttpStatus.NOT_FOUND)
        return await bcrypt.compare(password, user.password);
    }
    async setNewPassword(resetPassword:ResetPasswordDto){
        try{
        let isNewPasswordChanged:boolean = false;
        if(resetPassword.email && resetPassword.currentPassword){
            const isValidPassword = await this.checkPassword(resetPassword.email, resetPassword.currentPassword)
            if(isValidPassword)
                isNewPasswordChanged = await this.userService.setPassword(resetPassword.email, resetPassword.newPassword)
            else throw new HttpException("RESET_PASSWORD.CHANGE_PASSWORD_ERROR", HttpStatus.FORBIDDEN)
        } else if(resetPassword.newPasswordToken){
            const forgottenPassword = await this.getForgottenPassword(resetPassword.newPasswordToken)
            isNewPasswordChanged = await this.userService.setPassword(resetPassword.email, resetPassword.newPassword)
            if (isNewPasswordChanged){} //udalenie zapisi iz bd
        } else throw new HttpException('RESET_PASSWORD.CHANGE_PASSWORD_ERROR', HttpStatus.FORBIDDEN)
        return isNewPasswordChanged;
    } catch(error){
        console.log(error)
            return error
    }
}}

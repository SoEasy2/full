import { Injectable } from '@nestjs/common';
import {MailerService} from "@nestjs-modules/mailer";
import Config from "../config/config"
import { User } from '../user/entity/user.entity';

@Injectable()
export class MailService {
    constructor(private mailerService:MailerService) {}
    async sendUserConfirmation(user:User, token:string){
        try{
            const url = `${Config.host.url}:${Config.host.port}/api/auth/verify/${token}`
            await this.mailerService.sendMail({
                to:user.email,
                subject:"Welcome to Nice App! Confirm your email",
                template:"./confirmation",
                context:{
                    name:user.email,
                    url,
                }
            })
            return true
        }catch(e){
            console.log(e)
            return false
        }

    }
    async sendBookAppartament(user:User,city, hotel,startDate:string, endDate:string){
        try{
            await this.mailerService.sendMail({
                to:user.email,
                subject:"Welcome to Nice App! Confirm your email",
                template:"./bookApartament",
                context:{
                    name:user.email,
                    hotel:hotel,
                    city:city,
                    startDate:startDate,
                    endDate:endDate
                }
            })

            console.log()
            return true
        }catch (e) {
            console.log(e)
        }
    }
    async sendUserForgottenPassword(user:User, token){
        try{
            const url = `${Config.host.url}:${Config.host.port}/api/auth/forgotten/${token}`
            await this.mailerService.sendMail({
                to: user.email,
                subject: "Welcome to Nice App! Recover your password",
                template: "./forgottenPassword",
                context: {
                    name: user.email,
                    url,
                }
            })
            return true
        }catch (e){
            console.log(e)
            return false
        }
    }
}

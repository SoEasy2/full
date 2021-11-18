import { Injectable } from '@nestjs/common';
import {MailerService} from "@nestjs-modules/mailer";
import {User} from "../entities/user.entity";
import Config from "../config/config"

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

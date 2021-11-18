import {forwardRef, Module} from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {JwtModule} from "@nestjs/jwt";
import {UserModule} from "../user/user.module";
import {MailModule} from "../mail/mail.module";
import {ConfirmModule} from "../confirm/confirm.module";
import Config from "../config/config"
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../entities/user.entity";
import {JwtService} from "./jwt.service";
import {ForgottenPasswordEntityEntity} from "../entities/ForgottenPasswordEntity.entity";


@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtService],
  imports:[forwardRef(()=>UserModule), TypeOrmModule.forFeature([User, ForgottenPasswordEntityEntity]),
      MailModule,
    ConfirmModule, JwtModule.register({
    secret:Config.jwt.secretOrKey || 'SECRET',
    signOptions:{
      expiresIn:Config.jwt.expiresIn
    }
  }),MailModule],
  exports:[
      AuthService, JwtModule,
  ]
})
export class AuthModule {}

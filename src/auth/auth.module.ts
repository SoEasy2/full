import {forwardRef, Module} from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {JwtModule} from "@nestjs/jwt";
import {UserModule} from "../user/user.module";
import {MailModule} from "../mail/mail.module";
import {ConfirmModule} from "../confirm/confirm.module";
import Config from "../config/config"
import {TypeOrmModule} from "@nestjs/typeorm";

import {JwtService} from "./jwt.service";
import { User } from 'src/user/entity/user.entity';
import { ForgottenPasswordEntityEntity } from 'src/user/entity/ForgottenPasswordEntity.entity';
import { FavouriteAppartamentsEntity } from '../fauvorite-apartament/entity/fauvorite-apartament-entity.entity';




@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtService],
  imports:[forwardRef(()=>UserModule), TypeOrmModule.forFeature([User, ForgottenPasswordEntityEntity, FavouriteAppartamentsEntity]),
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

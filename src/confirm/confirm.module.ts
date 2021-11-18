import { Module } from '@nestjs/common';
import { ConfirmService } from './confirm.service';
import { ConfirmController } from './confirm.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../entities/user.entity";
import {Confirm} from "../entities/confirm.entity";
import {UserModule} from "../user/user.module";

@Module({
  imports:[TypeOrmModule.forFeature([User, Confirm])],
  providers: [ConfirmService],
  controllers: [ConfirmController],
  exports:[ConfirmService]
})
export class ConfirmModule {}

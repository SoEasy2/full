import { Module } from '@nestjs/common';
import { ConfirmService } from './confirm.service';
import { ConfirmController } from './confirm.controller';
import {TypeOrmModule} from "@nestjs/typeorm";

import {UserModule} from "../user/user.module";
import { Confirm } from './entity/confirm.entity';
import { User } from '../user/entity/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User, Confirm])],
  providers: [ConfirmService],
  controllers: [ConfirmController],
  exports:[ConfirmService]
})
export class ConfirmModule {}

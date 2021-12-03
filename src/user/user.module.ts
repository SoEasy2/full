import {forwardRef, Module} from '@nestjs/common';

import { UserService } from './user.service';
import { UserController } from './user.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AuthModule} from "../auth/auth.module";
import {ConfirmModule} from "../confirm/confirm.module";

import { MongooseModule } from '@nestjs/mongoose';
import { ItemsSchema } from '../map/etity/pinktada.schema';
import { User } from './entity/user.entity';
import { CommentEntity } from '../comment/entity/comment.entity';
import { FavouriteAppartamentsEntity } from '../fauvorite-apartament/entity/fauvorite-apartament-entity.entity';


@Module({
    imports:[MongooseModule.forFeature([{name:'items', schema:ItemsSchema}]),TypeOrmModule.forFeature([User, CommentEntity]), forwardRef(()=>AuthModule)],
    providers: [UserService],
    controllers: [UserController],
    exports:[
        UserService
    ]
})
export class UserModule {}

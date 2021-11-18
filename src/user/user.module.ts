import {forwardRef, Module} from '@nestjs/common';

import { UserService } from './user.service';
import { UserController } from './user.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../entities/user.entity";
import {CommentEntity} from "../entities/comment.entity";
import {AuthModule} from "../auth/auth.module";
import {ConfirmModule} from "../confirm/confirm.module";

@Module({
    imports:[TypeOrmModule.forFeature([User, CommentEntity]), forwardRef(()=>AuthModule)],
    providers: [UserService],
    controllers: [UserController],
    exports:[
        UserService
    ]
})
export class UserModule {}

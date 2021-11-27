import {forwardRef, Module} from '@nestjs/common';

import { UserService } from './user.service';
import { UserController } from './user.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../entities/user.entity";
import {CommentEntity} from "../entities/comment.entity";
import {AuthModule} from "../auth/auth.module";
import {ConfirmModule} from "../confirm/confirm.module";
import { FavouriteAppartamentsEntity } from 'src/entities/favouriteAppartaments.entity';
import { ItemsSchema } from 'src/map/pinktada.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports:[MongooseModule.forFeature([{name:'items', schema:ItemsSchema}]),TypeOrmModule.forFeature([User, CommentEntity, FavouriteAppartamentsEntity]), forwardRef(()=>AuthModule)],
    providers: [UserService],
    controllers: [UserController],
    exports:[
        UserService
    ]
})
export class UserModule {}

import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { UserModule } from './user/user.module';
import {User} from "./entities/user.entity";
import { CommentModule } from './comment/comment.module';
import {CommentEntity} from "./entities/comment.entity";
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import {Confirm} from "./entities/confirm.entity";
import { ConfirmModule } from './confirm/confirm.module';
import {ForgottenPasswordEntityEntity} from "./entities/ForgottenPasswordEntity.entity";
import { MongooseModule } from "@nestjs/mongoose";
import { MapModule } from './map/map.module';
import { CheckoutModule } from './checkout/checkout.module';

import Config from './config/config'
import { FavouriteAppartamentsEntity } from "./entities/favouriteAppartaments.entity";
import { BookApartamentsEntity } from "./entities/BookApartaments.entity";

@Module({
    imports:[TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'root',
        database: 'pinktada',
        entities: [User, CommentEntity, Confirm, ForgottenPasswordEntityEntity, FavouriteAppartamentsEntity],
        synchronize: true,
    }), UserModule, CommentModule, AuthModule, MailModule, ConfirmModule, BookApartamentsEntity,
    MongooseModule.forRoot('mongodb://localhost:27017/pinktada'),
    MapModule,
    CheckoutModule]
})
export class AppModule{}
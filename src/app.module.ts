import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { UserModule } from './user/user.module';

import { CommentModule } from './comment/comment.module';

import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';

import { ConfirmModule } from './confirm/confirm.module';

import { MongooseModule } from "@nestjs/mongoose";
import { MapModule } from './map/map.module';
import { CheckoutModule } from './checkout/checkout.module';

import Config from './config/config'
import { CommentEntity } from "./comment/entity/comment.entity";
import { User } from "./user/entity/user.entity";
import { ForgottenPasswordEntityEntity } from "./user/entity/ForgottenPasswordEntity.entity";

import { Confirm } from "./confirm/entity/confirm.entity";
import { FauvoriteApartamentModule } from './fauvorite-apartament/fauvorite-apartament.module';
import { FavouriteAppartamentsEntity } from "./fauvorite-apartament/entity/fauvorite-apartament-entity.entity";
import { BookApartamentModule } from './book-apartament/book-apartament.module';
import { BookApartamentsEntity } from "./book-apartament/entity/BookApartaments.entity";


@Module({
    imports:[TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'root',
        database: 'pinktada',
        entities: [User, CommentEntity, Confirm, ForgottenPasswordEntityEntity,BookApartamentsEntity, FavouriteAppartamentsEntity],
        synchronize: true,
    }), UserModule, CommentModule, AuthModule, MailModule, ConfirmModule,
    MongooseModule.forRoot('mongodb://localhost:27017/pinktada'),
    MapModule,
    CheckoutModule,
    FauvoriteApartamentModule,
    BookApartamentModule]
})
export class AppModule{}
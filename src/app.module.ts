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


@Module({
    imports:[TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'root',
        database: 'pinktada',
        entities: [User, CommentEntity, Confirm, ForgottenPasswordEntityEntity],
        synchronize: true,
    }), UserModule, CommentModule, AuthModule, MailModule, ConfirmModule]
})
export class AppModule{}
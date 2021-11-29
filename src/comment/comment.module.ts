import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { User } from '../user/entity/user.entity';
import { CommentEntity } from './entity/comment.entity';


@Module({
  imports:[TypeOrmModule.forFeature([User, CommentEntity])],
  controllers: [CommentController],
  providers: [CommentService]
})
export class CommentModule {}

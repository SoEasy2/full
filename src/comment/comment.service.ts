import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import { CommentEntity } from './entity/comment.entity';


@Injectable()
export class CommentService {
    constructor(@InjectRepository(CommentEntity) private commentRepository:Repository<CommentEntity>) {}

    createComment(dto):Promise<CommentEntity>{
        return this.commentRepository.save(dto);
    }

    findAll():Promise<CommentEntity[]>{
        return this.commentRepository.find();
    }

    findOne(id:string):Promise<CommentEntity>{
        return this.commentRepository.findOne(id);
    }
}

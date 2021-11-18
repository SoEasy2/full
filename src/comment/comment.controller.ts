import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CommentService} from "./comment.service";
import {createCommentDto} from "../dto/create-comment.dto";

@Controller('api/comment')
export class CommentController {
    constructor(private commentService:CommentService) {}

    @Get()
    findAll(){
        return this.commentService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id:string){
        return this.commentService.findOne(id)
    }
    @Post()
    createComment(@Body() dto:createCommentDto){
        return this.commentService.createComment(dto)
    }

}

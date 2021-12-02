import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {CommentService} from "./comment.service";
import { createCommentDto } from './dto/create-comment.dto';

@ApiTags('comment')
@Controller('api/comment')
export class CommentController {
    constructor(private commentService:CommentService) {}
    @ApiOperation({summary:'Get all comment'})
    @ApiResponse({status:200})
    @Get()
    findAll(){
        return this.commentService.findAll();
    }
    @ApiOperation({summary:'Get one comment'})
    @ApiResponse({status:200})
    @Get(':id')
    findOne(@Param('id') id:string){
        return this.commentService.findOne(id)
    }
    @ApiOperation({summary:'Create comment'})
    @ApiResponse({status:200})
    @ApiBody({type:createCommentDto})
    @Post()
    createComment(@Body() dto:createCommentDto){
        return this.commentService.createComment(dto)
    }

}

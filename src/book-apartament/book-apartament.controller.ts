import { Controller, Param } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator';
import {ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BookApartamentService } from './book-apartament.service';

@ApiTags('book-apartament')
@Controller('api/book-apartament/')
export class BookApartamentController {
    constructor(private bookService:BookApartamentService) {
    }
    @ApiOperation({summary:'Get one apartament'})
    @ApiResponse({status:200})
    @Get('/:email')
    async getBook(@Param('email') email:string){
        return await this.bookService.checkBook(email)
    }
}

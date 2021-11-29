import { Controller, Param } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { BookApartamentService } from './book-apartament.service';

@Controller('api/book-apartament/')
export class BookApartamentController {
    constructor(private bookService:BookApartamentService) {
    }
    @Get('/:email')
    async getBook(@Param('email') email:string){
        return await this.bookService.checkBook(email)
    }
}

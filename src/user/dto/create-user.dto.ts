import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto{
    @ApiProperty({example:'user@mail.ru', description:'Email'})
    email:string;
    @ApiProperty({example:'user@mail.ru', description:'password'})
    password:string;
}
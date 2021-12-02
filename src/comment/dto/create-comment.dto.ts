import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/user/entity/user.entity";

export class createCommentDto{
    @ApiProperty({type:Number, description:'Rating'})
    rate:number;
    @ApiProperty({type:String, description:'Body comment'})
    description:string;
    @ApiProperty({type:User, description:'User'})
    userId:number;
}
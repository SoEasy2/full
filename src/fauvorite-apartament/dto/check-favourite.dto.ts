import { ApiProperty } from "@nestjs/swagger";

export class ICheckFavouriteDto{
    @ApiProperty({type:String, description:'Email'})
    email:string;
    @ApiProperty({type:String, description:'Object id apartament'})
    appartament:string;
}
import { ApiProperty } from "@nestjs/swagger";

export class ICheckoutDto{
    @ApiProperty({type:String, description:'Id'})
    id:string;
    @ApiProperty({type:Number, description:'Id user'})
    idUser:number;
    @ApiProperty({type:String, description:'Id apartament'})
    idAppartament:string;
    @ApiProperty({type:Number, description:'Amount'})
    amount:number;
    @ApiProperty({type:String, description:'Description'})
    description:string;
    @ApiProperty({type:String, description:'Currency'})
    currency:string;
    @ApiProperty({type:String, description:'End date'})
    endDate:string;
    @ApiProperty({type:String, description:'Start date'})
    startDate:string;
    @ApiProperty({type:String, description:'City'})
    city:string;
    @ApiProperty({type:String, description:'Hotel'})
    hotel:string
}
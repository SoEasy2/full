import { ApiProperty } from "@nestjs/swagger";
export class ICord{
   @ApiProperty({type:Number, description:'Latitude'})
    lat:number;
    @ApiProperty({type:Number, description:'Longitude'})
    lng:number;
    mapDistance:number
}
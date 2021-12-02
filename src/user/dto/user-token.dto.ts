import { ApiProperty } from "@nestjs/swagger";

export class UserTokenDto{
    @ApiProperty({type:String, description:'Email'})
    email:string;
    @ApiProperty({type:Number, description:'Id'})
    id:number;
    @ApiProperty({type:Boolean, description:'Valid account'})
    valid:boolean;


    constructor(user) {
        this.email = user.email;
        this.id = user.id;
        this.valid = user.valid;

    }

}
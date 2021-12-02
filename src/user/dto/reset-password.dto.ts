import { ApiProperty } from "@nestjs/swagger";

export class ResetPasswordDto{
    @ApiProperty({type:String, description:'Email'})
    readonly email:string;
    @ApiProperty({type:String, description:'New password'})
    readonly newPassword:string;
    @ApiProperty({type:String, description:'New password token'})
    readonly newPasswordToken:string;
    @ApiProperty({type:String, description:'Current password'})
    readonly currentPassword:string;
}
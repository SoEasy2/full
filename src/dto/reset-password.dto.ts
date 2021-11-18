export class RessetPasswordDto{
    readonly email:string,
    readonly newPassword:string,
    readonly newPasswordToken:string,
    readonly currentPassword
}
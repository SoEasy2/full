export interface IUser{
    email:string;
    id:number;
    valid:boolean
}
export interface ITokens{
    accesToken:string;
    refreshToken:string;
}
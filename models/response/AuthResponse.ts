
import {ITokens, IUser } from "../IUser";

export interface AuthResponse{
    tokens:ITokens;
    user:IUser;
}
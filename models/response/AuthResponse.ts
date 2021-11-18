import { IToken } from "../../redux/types/types";
import {ITokens, IUser } from "../IUser";

export interface AuthResponse{
    tokens:IToken;
    user:IUser;
}
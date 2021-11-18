import { handleActions } from "redux-actions";
import {AuthActions, UserActions } from "../actions";
import { IUser } from "../types/user";

const initialState = null;

export const UserReducer = handleActions<IUser | null, IUser>({
    [UserActions.Type.SET_USER]:(state, action)=>action.payload
}, initialState)
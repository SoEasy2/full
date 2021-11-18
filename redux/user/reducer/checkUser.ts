import { handleActions } from "redux-actions";
import { AuthActions } from "../actions";

import { IUser } from "../types/user";

const initialState = null;

export const CheckUserReducer = handleActions<IUser | null, IUser>({
    [AuthActions.Type.CHECK_USER]:(state, action)=>action.payload,
}, initialState)
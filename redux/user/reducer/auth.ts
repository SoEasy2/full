import { handleActions } from "redux-actions";
import { AuthActions } from "../actions";
import { IAuth } from "../types/auth";


const initialState = null;

export const AuthReducer = handleActions<IAuth|null, IAuth>({
    [AuthActions.Type.SET_AUTH]:(state,action)=>action.payload,
},initialState)
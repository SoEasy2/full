import {createAction} from 'redux-actions'
import { IAuth, ILogin, ISignUp } from '../types/auth'
import { IUser } from '../types/user'

enum Type{
    SET_AUTH='SET_AUTH',
    SIGN_IN='SIGN_IN',
    SIGN_UP='SIGN_UP',
    CHECK_USER='CHECK_USER',
    LOGOUT='LOGOUT'
}
const setAuthInfo = createAction<IAuth>(Type.SET_AUTH)
const signIn = createAction<ILogin>(Type.SIGN_IN)
const signUp = createAction<ISignUp>(Type.SIGN_UP)
const checkUser = createAction(Type.CHECK_USER)
const logoutUser = createAction(Type.LOGOUT)
export const AuthActions = {
    Type,
    setAuthInfo,
    signUp,
    signIn,
    checkUser,
    logoutUser
}
export type AuthActions = Omit<typeof AuthActions, 'Type'>
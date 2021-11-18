import { Action } from "redux-actions";
import {IAuth, ILogin, ISignUp } from "../types/auth";
import {checkUser, logoutUser, signIn, signUp } from "./api";
import {call, put, takeLatest} from 'redux-saga/effects'
import { AuthActions, UserActions } from "../actions";
import * as _ from 'lodash'
import { IUser } from "../types/user";
import cookie from 'js-cookie'
import { FormActions } from "../../searchForm/actions";
import { IForm } from "../../searchForm/types/form";



function* SignInWorker(action:Action<ILogin>) {
    try{
        const {data} = yield call(signIn, action.payload)
        cookie.set('refreshToken', (`Bearer ${data.tokens.refreshToken}`))
        yield put(AuthActions.setAuthInfo(data.tokens))
        yield put(UserActions.setUser(data.user))
    }catch (e) {
        console.error(e)
        console.log(e)
    }
}
function* FormWorker(action:Action<IForm>){

    try{
        const obj = {...action.payload}
        yield FormActions.setForm(obj)

    }catch (e) {

    }

}

function* LogoutUserWorker(){
    try{
        const {data} = yield call(logoutUser)
        yield AuthActions.logoutUser(data)
    }catch (e) {
        console.error(e)
        console.log(e)
    }
}

function* CheckUserWorker(){
    try{
        const {data} = yield call(checkUser)
        yield put(UserActions.setUser(data))
    }catch (e) {
        console.error(e)
        console.log(e)
    }
}

function* SignUpWorker(action:Action<ISignUp>){
    try{
        const {data} = yield call(signUp, action.payload)
    } catch (e) {
        console.error(e);
        console.log(e)
    }
}

export default function* watchAuth(){
    yield takeLatest(AuthActions.Type.SIGN_IN, SignInWorker)
    yield takeLatest(AuthActions.Type.SIGN_UP, SignUpWorker)
    yield takeLatest(AuthActions.Type.CHECK_USER, CheckUserWorker)
    yield takeLatest(FormActions.Type.SET_FORM, FormWorker)
    yield takeLatest(AuthActions.Type.LOGOUT, LogoutUserWorker)
}
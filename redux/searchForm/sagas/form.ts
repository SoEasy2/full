import { Action } from "redux-actions";
import {put, takeLatest } from "redux-saga/effects";
import { FormActions } from "../actions/form";
import { IForm } from "../types/form";

function* FormWorker(action:Action<IForm>){
    yield put(FormActions.setForm(action.payload))
}

export default function* watchForm(){
    yield takeLatest(FormActions.Type.SET_FORM,FormWorker)
}
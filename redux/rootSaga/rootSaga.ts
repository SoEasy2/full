import { all } from "redux-saga/effects";
import authSaga from '../user/sagas/auth'
import watchForm from '../searchForm/sagas/form'
export default function* rootSaga() {
    yield all([
        authSaga(),

    ])
}
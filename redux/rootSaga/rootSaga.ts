import { all } from "redux-saga/effects";
import authSaga from '../user/sagas/auth'
import watchForm from '../searchForm/sagas/form'
import watchMap from "../map/sagas/map";
import watchMapData from '../mapDate/sagas/mapData'
export default function* rootSaga() {
    yield all([
        authSaga(),
        watchMap(),
        watchMapData()
    ])
}
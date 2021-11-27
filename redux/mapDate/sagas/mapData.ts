import { Action } from "redux-actions";
import {put, takeLatest } from "redux-saga/effects";
import { MapDataActions } from "../actions/actions";
import { IDataMap } from "../types/types";


function* MapDataWorker(action:Action<IDataMap>){
    yield MapDataActions.setDataMap(action.payload)
}

export default function* watchMapData(){
    yield takeLatest(MapDataActions.Type.SET_DATA_MAP, MapDataWorker)
}
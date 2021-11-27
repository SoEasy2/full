import { Action } from "redux-actions";
import {call, put, takeLatest } from "redux-saga/effects";
import { IDataMap } from "../../mapDate/types/types";
import { MapActions } from "../actions/actions";
import { ICord } from "../types/types";
import { getMap } from "./api/sagas";

function* MapWorker(action:Action<ICord>){
    try{
        const {data} = yield call(getMap,action.payload)
        yield put(MapActions.getAppartament(data))
    }catch (e) {

    }
}
function* MapWorkerPricePlus(action:Action<any>){
    try{
        const temp = JSON.parse(JSON.stringify(action.payload))
        const arr = temp.sort((a,b)=>(a.pricingQuote.rateWithServiceFee.amount > b.pricingQuote.rateWithServiceFee.amount) ? 1 : ((b.pricingQuote.rateWithServiceFee.amount > a.pricingQuote.rateWithServiceFee.amount) ? -1 : 0))
        yield  put(MapActions.getAppartament(arr))

    }catch (e) {

    }
}
function* MapWorkerPriceMinus(action:Action<any>){
    try{
        const temp = JSON.parse(JSON.stringify(action.payload))
        const arr = temp.sort((a,b)=>(a.pricingQuote.rateWithServiceFee.amount > b.pricingQuote.rateWithServiceFee.amount) ? 1 : ((b.pricingQuote.rateWithServiceFee.amount > a.pricingQuote.rateWithServiceFee.amount) ? -1 : 0)).reverse()
        yield  put(MapActions.getAppartament(arr))

    }catch (e) {

    }
}
function* MapWorkerFilterFiveStar(action:Action<any>){
    try{
        const temp = JSON.parse(JSON.stringify(action.payload))
        const arr = temp.filter(item=>item.listing.avgRating == 5);
        yield  put(MapActions.getAppartament(arr))

    }catch (e) {

    }
}

function* MapWorkerFilterAll(action:Action<any>){
    try{
        const {data} = yield call(getMap,action.payload)
        yield put(MapActions.getAppartament(data))
    }catch (e) {

    }
}

export default function* watchMap(){
    yield takeLatest(MapActions.Type.SET_APPARTAMENT, MapWorker)
    yield takeLatest(MapActions.Type.SORT_APPARTAMENT_PRICE_PLUS, MapWorkerPricePlus)
    yield takeLatest(MapActions.Type.SORT_APPARTAMENT_PRICE_MINUS, MapWorkerPriceMinus)
    yield takeLatest(MapActions.Type.FILTER_APPARTAMENT_FIVE_STAR, MapWorkerFilterFiveStar)
    yield takeLatest(MapActions.Type.FILTER_ALL_APPARTAMENT, MapWorkerFilterAll)
}
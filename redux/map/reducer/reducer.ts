import { handleActions } from "redux-actions";
import { MapActions } from "../actions/actions";

const initialState = [];

export const MapReducer = handleActions<Array<Object>>({
    [MapActions.Type.GET_APPARTAMENT]:(state,action)=>action.payload,
    [MapActions.Type.SORT_APPARTAMENT_PRICE_PLUS]:(state,action)=>action.payload,
    [MapActions.Type.SORT_APPARTAMENT_PRICE_MINUS]:(state,action)=>action.payload,
    [MapActions.Type.FILTER_APPARTAMENT_FIVE_STAR]:(state,action)=>action.payload,
},initialState)
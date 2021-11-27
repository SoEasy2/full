import { handleActions } from "redux-actions"
import { MapDataActions } from "../actions/actions"
import { IDataMap } from "../types/types"

const initialState:IDataMap = {
    lat: 38.74995,
    lng: -78.1095,
    zoom:11,
    mapDistance:null
}

export const MapDataReducer = handleActions<IDataMap>({
    [MapDataActions.Type.SET_DATA_MAP]:(state,action)=>action.payload
},initialState)
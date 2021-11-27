import { combineReducers } from "redux"
import { MapReducer } from "../map/reducer/reducer"
import { MapDataReducer } from "../mapDate/reducer/reducer"
import { FormReducer } from "../searchForm/reducer/form"
import { AuthReducer } from "../user/reducer/auth"
import { UserReducer } from "../user/reducer/user"
import {IRootReducer} from './state'

const rootReducer = combineReducers<IRootReducer>({
    user:UserReducer as any,
    auth:AuthReducer as any,
    form: FormReducer as any,
    map: MapReducer as any,
    mapData: MapDataReducer as any
})
export default rootReducer
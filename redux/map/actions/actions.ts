import { createAction } from "redux-actions";
import {IDataMap} from '../../mapDate/types/types'

enum Type{
    SET_APPARTAMENT='SET_APPARTAMENT',
    GET_APPARTAMENT='GET_APPARTAMENT',
    SORT_APPARTAMENT_PRICE_PLUS = 'SORT_APPARTAMENT_PRICE_PLUS',
    SORT_APPARTAMENT_PRICE_MINUS = 'SORT_APPARTAMENT_PRICE_MINUS',
    FILTER_APPARTAMENT_FIVE_STAR = 'FILTER_APPARTAMENT_FIVE_STAR',
    FILTER_ALL_APPARTAMENT = 'FILTER_ALL_APPARTAMENT'
}
const setAppartament = createAction(Type.SET_APPARTAMENT)
const getAppartament = createAction<Array<Object>>(Type.GET_APPARTAMENT)
const sortAppartamentPricePlus = createAction<Array<Object>>(Type.SORT_APPARTAMENT_PRICE_PLUS)
const sortAppartamentPriceMinus = createAction<Array<Object>>(Type.SORT_APPARTAMENT_PRICE_MINUS)
const filterAppartamentFiveStar = createAction<Array<Object>>(Type.FILTER_APPARTAMENT_FIVE_STAR)
const filterAllAppartament = createAction(Type.FILTER_ALL_APPARTAMENT)
export const MapActions = {
    Type,
    setAppartament,
    getAppartament,
    sortAppartamentPricePlus,
    sortAppartamentPriceMinus,
    filterAppartamentFiveStar,
    filterAllAppartament

}
export type MapActions = Omit<typeof MapActions, 'Type'>
import { createAction } from "redux-actions";
import { IDataMap } from "../types/types";

enum Type{
    SET_DATA_MAP='SET_DATA_MAP'
}
const setDataMap = createAction<IDataMap>(Type.SET_DATA_MAP)
export const MapDataActions = {
    Type,
    setDataMap
}
export type MapDataActions = Omit<typeof MapDataActions, 'Type'>
import { createAction } from "redux-actions";
import { IUser } from "../types/user";


enum Type{
    SET_USER='SET_USER',
    SET_USER_FAVOURITE='SET_USER_FAVOURITE'
}
const setUser = createAction<IUser>(Type.SET_USER)
const setUserFavourite=createAction<IUser>(Type.SET_USER_FAVOURITE)

export const UserActions = {
    Type,
    setUser,
    setUserFavourite
}
export type UserActions = Omit<typeof UserActions, 'Type'>
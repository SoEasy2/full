import { IDataMap } from "../mapDate/types/types";
import { IForm } from "../searchForm/types/form";
import { IAuth } from "../user/types/auth";
import { IUser } from "../user/types/user";


export interface IRootReducer{
    user:IUser,
    auth:IAuth,
    form:IForm,
    map:any,
    mapData:IDataMap

}
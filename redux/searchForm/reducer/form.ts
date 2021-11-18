import { handleActions } from "redux-actions";
import { FormActions } from "../actions/form";
import { IForm } from "../types/form";

const initialState = { location:'',
    startDate:'',
    endDate:'',
    bedroom:''};
export const FormReducer = handleActions<IForm|null, IForm>({
    [FormActions.Type.SET_FORM]:(state, action)=>action.payload,
}, initialState)
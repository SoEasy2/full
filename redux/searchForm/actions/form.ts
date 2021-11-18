import { createAction } from "redux-actions";
import { IForm } from "../types/form";


enum Type{
    SET_FORM='SET_FORM'
}
const setForm = createAction<IForm>(Type.SET_FORM)
export const FormActions = {
    Type,
    setForm
}
export type FormActions = Omit<typeof FormActions, 'Type'>
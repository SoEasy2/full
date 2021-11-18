import React, {useEffect, useState } from 'react';
import classes from './Form.module.scss'
import Input from "../Input/Input"
import { useRouter } from 'next/router';
import SelectComponent from '../Select/Select';
import { IForm } from '../../../../redux/searchForm/types/form';
import { Dispatch } from 'redux';
import { connect, useSelector } from 'react-redux';
import { FormActions } from '../../../../redux/searchForm/actions';
import { IRootReducer } from '../../../../redux/rootReducer/state';
type IFormContainerProps = ReturnType<typeof mapDispatchToProps>
const Form:React.FC<IFormContainerProps> = ({formAction}) => {
    const redirect = (event) =>{
        event.preventDefault()
        formAction(form)
        router.push('/search');
    }

    const router = useRouter();
    const [form, inSetForm] = useState<IForm>({   location:'',
                                                startDate:'',
                                                endDate:'',
                                                bedroom:''})
    const changeInputHandler = (event) =>{
        inSetForm(prev=>({...prev, ...{[event.target.name]:event.target.value}}))
    }
    return (<>
        <form className={classes.form} onSubmit={(event)=>redirect(event)}>
            <Input changeInputHandler={changeInputHandler} name={'location'} type={"text"} value={form.location} placeholder={"Enter location"}>Location</Input>
            <Input changeInputHandler={changeInputHandler} name={'startDate'} value={form.startDate} type={"date"}>Start Date</Input>
            <Input changeInputHandler={changeInputHandler} name={'endDate'} value={form.endDate} type={"date"}>End Date</Input>
            <SelectComponent setForm={inSetForm}/>
            <button type="submit" onClick={(event)=> {redirect(event)}} className={classes.btnFind}>

            </button>
        </form>

        </>
    );
}


const mapDispatchToProps = (dispatch:Dispatch) => ({
    formAction:(payload:IForm) => dispatch(FormActions.setForm(payload))
})

export default connect(null, mapDispatchToProps)(Form);
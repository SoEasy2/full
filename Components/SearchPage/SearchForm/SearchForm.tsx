import React, { useState } from 'react';
import {connect, useSelector } from 'react-redux';
import Select from 'react-select';
import { IRootReducer } from '../../../redux/rootReducer/state';
import { IForm } from '../../../redux/searchForm/types/form';
import SearchBtn from "../SearchBtn/SearchBtn";
import classes from "./SearchForm.module.scss"
type OptionType = {
    value:string,
    label:string
}
const SearchForm = () => {
    const options:OptionType[] = [
        { value: '1', label: 'One' },
        { value: '2', label: 'Two' },
        { value: '3', label: 'Three' },
        { value: '4', label: 'Four' },
    ]
    const [select, setSelect] = useState({value:'1', label:'One'})
    const handleChange = (option) =>{
        setSelect(option)
    }
    const [form, inSetForm] = useState<IForm>({   location:'',
        startDate:'',
        endDate:'',
        bedroom:''})
    const changeInputHandler = (event) =>{
        inSetForm(prev=>({...prev, ...{[event.target.name]:event.target.value}}))
    }
    const formState = useSelector((state:IRootReducer) => state.form)
    return (
        <div className={classes.searchPanel}>
            <form action="post" className={classes.form}>
                <input value={formState.location} onChange={(event)=>changeInputHandler(event)} className={classes.searchLocation} type="text"/>
                <input value={formState.startDate} onChange={(event)=>changeInputHandler(event)} className={classes.searchDate} type="date"/>
                <input value={formState.endDate} onChange={(event)=>changeInputHandler(event)} className={classes.searchDate} type="date"/>
                <Select
                    className={classes.select}
                    placeholder={''}
                    value={select}
                    onChange={(option)=>handleChange(option)}
                    options={options}
                />
                <SearchBtn/>
            </form>
        </div>
    );
};

export default connect(null, null)(SearchForm);
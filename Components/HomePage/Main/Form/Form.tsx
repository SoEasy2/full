import React from 'react';
import classes from './Form.module.scss'
import Input from "../Input/Input";
import Select from "../Select/Select";
const Form = () => {
    return (
        <form className={classes.form}>
            <Input type={"text"} placeholder={"Enter location"}>Location</Input>
            <Input type={"date"}>Start Date</Input>
            <Input type={"date"}>End Date</Input>
            <Select/>
            <button type="submit" className={classes.btnFind}>

            </button>
        </form>
    );
};

export default Form;
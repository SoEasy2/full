import React from 'react';
import classes from "./Input.module.scss";

interface IInput{
    placeholder?:string,
    type:string,
    value:any,
    changeInputHandler(event):void,
    name:string
}

const Input:React.FC<IInput> = ({children,type,placeholder, value, name, changeInputHandler}) => {
    return (
        <label htmlFor={classes.input} className={classes.label}>
            <div className={classes.div}>{children}</div>
            <input type={type} name={name} onChange={(event)=>changeInputHandler(event)} id={classes.input} value={value} placeholder={placeholder} className={classes.input}/>
        </label>
    );
};

export default Input;
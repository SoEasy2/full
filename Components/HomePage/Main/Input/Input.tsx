import React from 'react';
import classes from "./Input.module.scss";

interface IInput{
    placeholder?:string,
    type:string
}

const Input:React.FC<IInput> = ({children,type,placeholder}) => {
    return (
        <label htmlFor={classes.input} className={classes.label}>
            <div className={classes.div}>{children}</div>
            <input type={type} id={classes.input} placeholder={placeholder} className={classes.input}/>
        </label>
    );
};

export default Input;
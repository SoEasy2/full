import React from 'react';
import classes from './ButtonSignIn.module.scss'

const ButtonSignIn:React.FC = ({children}) => {
    return (
        <button className={classes.button}>
            {children}
        </button>
    );
};

export default ButtonSignIn;
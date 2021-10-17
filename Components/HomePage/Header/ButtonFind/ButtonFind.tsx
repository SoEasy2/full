import React from 'react';
import classes from './ButtonFind.module.scss'

const ButtonFind:React.FC = ({children}) => {
    return (
        <button className={classes.button}>
            {children}
        </button>
    );
};

export default ButtonFind;
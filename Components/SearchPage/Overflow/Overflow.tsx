import React from 'react';
import classes from "./Overflow.module.scss"

const Overflow:React.FC = ({children}) => {
    return (
        <div className={classes.overflow}>
            {children}
        </div>
    );
};

export default Overflow;
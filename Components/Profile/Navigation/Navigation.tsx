import React from 'react';
import classes from './Navigation.module.scss'
const Navigation = () => {
    return (
        <div className={classes.content}>
            <div className={classes.wrapper}>
                <button className={`${classes.button} ${classes.active}`}>Dashboard</button>
                <button className={classes.button}>My Assets</button>
                <button className={classes.button}>Biddings</button>
            </div>
        </div>
    );
};

export default Navigation;
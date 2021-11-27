import React from 'react';
import classes from './Navigation.module.scss'
const Navigation = () => {
    return (
        <div className={classes.content}>
            <div className={classes.wrapper}>
                <button>Dashboard</button>
                <button>My Assets</button>
                <button>Biddings</button>
            </div>
        </div>
    );
};

export default Navigation;
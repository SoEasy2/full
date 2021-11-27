import React from 'react';
import ItemsList from './ItemsList/ItemsList';
import classes from './TopList.module.scss'
const TopList = () => {
    return (
        <div className={classes.wrapper}>
            <ItemsList/>
        </div>
    );
};

export default TopList;
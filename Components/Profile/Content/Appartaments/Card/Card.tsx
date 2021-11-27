import React from 'react';
import classes from './Card.module.scss'
const Card = () => {
    return (
        <div className={classes.wrapperTop}>
            <div className={classes.img}><img className={classes.images} src="" alt=""/></div>
            <div className={classes.room }>Room#</div>
            <div className={classes.hotel}>Hotel</div>
            <div className={classes.destination}>Destination</div>
            <div className={classes.date}>Start-date</div>
            <div className={classes.date}>End-date</div>
        </div>
    );
};

export default Card;
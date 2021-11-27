import React from 'react';
import classes from './Appartaments.module.scss'
import Card from './Card/Card';
const Appartaments = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.div}>
                <div className={classes.overflow}>
                <div className={classes.wrapperTop}>
                    <div className={classes.img}>Picture</div>
                    <div className={classes.room }>Room#</div>
                    <div className={classes.hotel}>Hotel</div>
                    <div className={classes.destination}>Destination</div>
                    <div className={classes.date}>Start-date</div>
                    <div className={classes.date}>End-date</div>
                </div>
                    <Card/>
                    <Card/>
            </div>
            </div>
        </div>
    );
};

export default Appartaments;
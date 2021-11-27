import React from 'react';
import classes from './Advantages.module.scss'
const Advantages = () => {
    return (
        <div className={classes.mainAdvantages}>
            <li className={`${classes.advantages} ${classes.bookmark}`}><p className={classes.advantagesText}>Can instant book:<span className={classes.spanNo}> No</span></p></li>
            <li className={`${classes.advantages} ${classes.home}`}><p className={classes.advantagesText}>Is new listing:<span className={classes.spanNo}> No</span></p></li>
            <li className={`${classes.advantages} ${classes.business}`}><p className={classes.advantagesText}>Is business travel ready:<span className={classes.spanNo}> No</span></p></li>
            <li className={`${classes.advantages} ${classes.cup}`}><p className={classes.advantagesText}>Is superhost:<span className={classes.spanYes}> Yes</span></p></li>
        </div>
    );
};

export default Advantages;
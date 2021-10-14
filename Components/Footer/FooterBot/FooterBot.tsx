import React from 'react';
import classes from './FooterBot.module.scss'
const FooterBot:React.FC = () => {
    return (
        <div className={classes.bot}>
            <p>All rights Reserved @ 2020</p>
            <div className={classes.botItems}>
                <a href="#" className={classes.link}>Terms & Conditions</a>
                <a href="#" className={classes.link}> Privacy Policy</a>
            </div>

        </div>
    );
};

export default FooterBot;
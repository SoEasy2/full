import React from 'react';
import classes from './ConfirmPage.module.scss'
const ConfirmPage:React.FC = () => {
    return (
        <div className={classes.main}>
        <div className={classes.content}>
            <h6 className={classes.title}>
                Thanks for signing up for Pinktada
            </h6>
            <div className={classes.img}>
            </div>
            <p className={classes.text}>
                To verify your account, follow the link sent to your email
            </p>
            <p className={classes.text}>If you entered the wrong email, re-create your account</p>
        </div>
        </div>
    );
};

export default ConfirmPage;
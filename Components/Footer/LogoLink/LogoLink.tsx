import React from 'react';
import classes from './Logo.module.scss'
const LogoLink:React.FC = () => {
    return (
        <div className="logo">
            <a href="#" className={classes.logoLink}>pinktada</a>
        </div>
    );
};

export default LogoLink;
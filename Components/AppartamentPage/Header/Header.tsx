import React from 'react'
import classes from './Header.module.scss'
import Logo from '../../SearchPage/Logo/Logo'
const Header:React.FC = () => {
    return (
        <header className={classes.header}>
            <div className={classes.wrapper}>
                <Logo/>
                <div className={classes.profile}></div>
            </div>
        </header>
    );
};

export default Header;
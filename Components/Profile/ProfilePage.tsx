import React from 'react';
import Content from './Content/Content';
import Navigation from './Navigation/Navigation';
import classes from './ProfilePage.module.scss'
const ProfilePage = () => {
    return (
        <div className={classes.wrapper}>
        <Navigation/>
            <Content/>
        </div>
    );
};

export default ProfilePage;
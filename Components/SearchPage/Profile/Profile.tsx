import React from 'react';
import ProfileBtn from "../ProfileBtn/ProfileBtn";
import classes from "./Profile.module.scss"
const Profile = () => {
    return (
        <div className={classes.profile}>
            <ProfileBtn>Sell Assets</ProfileBtn>
            <select className={classes.select} name="" id="">
            </select>
            <div className={classes.profileImg}></div>
        </div>
    );
};

export default Profile;
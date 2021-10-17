import React from 'react';
import classes from "./ProfileBtn.module.scss"

const ProfileBtn:React.FC = ({children}) => {
    return (
        <button className={classes.profileBtn}>{children}</button>
    );
};

export default ProfileBtn;
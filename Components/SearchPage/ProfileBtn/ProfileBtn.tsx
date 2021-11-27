import React from 'react';
import classes from "./ProfileBtn.module.scss"
interface IProps{
    setFavourite(obj:Boolean):void
}
const ProfileBtn:React.FC<IProps> = ({children, setFavourite}) => {
    return (
        <button className={classes.profileBtn} onClick={()=>setFavourite(true)}>{children}</button>
    );
};

export default ProfileBtn;
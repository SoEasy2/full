import { useRouter } from 'next/router';
import React from 'react';
import {connect, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { MapActions } from '../../../redux/map/actions/actions';
import { IRootReducer } from '../../../redux/rootReducer/state';
import { AuthActions } from '../../../redux/user/actions';
import ProfileBtn from "../ProfileBtn/ProfileBtn";
import classes from "./Profile.module.scss"
interface IProps{
    setFavourite(obj:Boolean):void
}
const Profile:React.FC<IProps> = ({setFavourite}) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const user = useSelector((state:IRootReducer) => state.user)
    const reloaded = () =>{
        dispatch(AuthActions.logoutUser())
        location.reload()
    }
    return (
        <div className={classes.profile}>
            {user ? <ProfileBtn setFavourite={setFavourite}>Favourite</ProfileBtn> : null}
            <p>{user ? user.email : null}</p>
            {user ? <p className={classes.logout} onClick={()=>reloaded()}>Logout</p> : null}
            <div className={classes.profileImg} onClick={()=>router.push('/profile')}></div>
        </div>
    );
};



export default Profile;
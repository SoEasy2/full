import React from 'react';
import {connect, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { IRootReducer } from '../../../redux/rootReducer/state';
import { AuthActions } from '../../../redux/user/actions';
import ProfileBtn from "../ProfileBtn/ProfileBtn";
import classes from "./Profile.module.scss"
type ILoginContainerProps = ReturnType<typeof mapDispatchToProps>
const Profile:React.FC<ILoginContainerProps> = ({logout}) => {
    const user = useSelector((state:IRootReducer) => state.user)
    const reloaded = () =>{
        logout()
        location.reload()
    }
    return (
        <div className={classes.profile}>
            <ProfileBtn>Sell Assets</ProfileBtn>
            <p>{user ? user.email : null}</p>
            {user ? <p className={classes.logout} onClick={()=>reloaded()}>Logout</p> : null}
            <div className={classes.profileImg}></div>
        </div>
    );
};

const mapDispatchToProps = (dispatch:Dispatch) => ({
    logout:() => dispatch(AuthActions.logoutUser()),
})

export default connect(null, mapDispatchToProps)(Profile);
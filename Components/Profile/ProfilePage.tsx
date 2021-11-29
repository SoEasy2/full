import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { IRootReducer } from '../../redux/rootReducer/state';
import { AuthActions } from '../../redux/user/actions/auth';
import Content from './Content/Content';
import Navigation from './Navigation/Navigation';
import classes from './ProfilePage.module.scss'
const ProfilePage = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const user = useSelector((state:IRootReducer) => state.user)
    useEffect(()=>{
        dispatch(AuthActions.checkUser())
        user == null  ? router.push('/') : null
    },[])

    return (

        <div className={classes.wrapper}>
        <Navigation/>
            <Content/>
        </div>
    );
};

export default ProfilePage;
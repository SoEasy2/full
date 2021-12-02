import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import {connect, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { IRootReducer } from '../../redux/rootReducer/state';
import { AuthActions } from '../../redux/user/actions/auth';
import { ILogin } from '../../redux/user/types/auth';
import ModalSign from '../ModalSign/ModalSign';
import Content from './Content/Content';
import Navigation from './Navigation/Navigation';
import classes from './ProfilePage.module.scss'
type ILoginContainerProps = ReturnType<typeof mapDispatchToProps>
const ProfilePage:React.FC<ILoginContainerProps> = ({signIn, signUp, checkUser}) => {
    const user = useSelector((state:IRootReducer) => state.user)

    useEffect(()=>{
        checkUser()
    },[])

    return (
        <>{user ? <div className={classes.wrapper}>
            <Navigation/>
            <Content/>
        </div> : <ModalSign signIn={signIn} signUp={signUp}/>}
            </>

    );
};
const mapDispatchToProps = (dispatch:Dispatch) => ({
    signIn:(payload:ILogin) => dispatch(AuthActions.signIn(payload)),
    signUp:(payload:ILogin) => dispatch(AuthActions.signUp(payload)),
    checkUser:()=>dispatch(AuthActions.checkUser())
})
export default connect(null, mapDispatchToProps)(ProfilePage);
import React, { useEffect, useState} from 'react';
import {NextPage} from "next";
import "leaflet/dist/leaflet.css"
import Main from "../Components/HomePage/Main/Main/Main";
import Rated from "../Components/HomePage/Rated/Rated/Rated";
import Major from "../Components/HomePage/Major/Major/Major";
import Footer from "../Components/HomePage/Footer/Footer/Footer";
import Header from "../Components/HomePage/Header/Header/Header";
import ModalSign from "../Components/ModalSign/ModalSign";
import { ILogin } from '../redux/user/types/auth';
import { AuthActions } from '../redux/user/actions';
import { Dispatch } from 'redux';
import { connect, useSelector } from 'react-redux';
import { IRootReducer } from '../redux/rootReducer/state';


type ILoginContainerProps = ReturnType<typeof mapDispatchToProps>
const Home:React.FC<ILoginContainerProps> = ({signIn, signUp, checkUser}) => {

        const user = useSelector((state:IRootReducer) => state.user)

        const [isModalOpen, modalOpen] = useState(false);
        const stateModal = () =>{
                modalOpen(!isModalOpen);
        }
        useEffect(()=>{
             checkUser()
        }, [])

        return (
            <>{!user ? (isModalOpen ? <ModalSign  signUp={signUp} signIn={signIn} stateModal={stateModal}/> :null) :null}

                <Header stateModal={stateModal} />
                <Main/>
                <Rated/>
                <Major/>
                <Footer/>
            </>
        );
};
const mapStateProps = (state:IRootReducer) =>({

})
const mapDispatchToProps = (dispatch:Dispatch) => ({
        signIn:(payload:ILogin) => dispatch(AuthActions.signIn(payload)),
        signUp:(payload:ILogin) => dispatch(AuthActions.signUp(payload)),
        checkUser:()=>dispatch(AuthActions.checkUser())
})
export default connect(mapStateProps, mapDispatchToProps)(Home);
import React, {useEffect, useState} from 'react';
import {NextPage} from "next";
import "leaflet/dist/leaflet.css"
import Main from "../Components/HomePage/Main/Main/Main";
import Rated from "../Components/HomePage/Rated/Rated/Rated";
import Major from "../Components/HomePage/Major/Major/Major";
import Footer from "../Components/HomePage/Footer/Footer/Footer";
import Header from "../Components/HomePage/Header/Header/Header";
import ModalSign from "../Components/ModalSign/ModalSign";
const Home:NextPage = () => {
        const [isModalOpen, modalOpen] = useState(false);
        const stateModal = () =>{
                modalOpen(!isModalOpen);
        }
        return (
            <>
                    {isModalOpen ? <ModalSign stateModal={stateModal}/> :null}
                <Header stateModal={stateModal} />
                <Main/>
                <Rated/>
                <Major/>
                <Footer/>
            </>
        );
};

export default Home;
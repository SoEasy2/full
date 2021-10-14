import React from 'react';
import {NextPage} from "next";
import Header from "../Components/Header/Header/Header";
import Main from "../Components/Main/Main/Main";
import Rated from "../Components/Rated/Rated/Rated";
import Major from "../Components/Major/Major/Major";
import Footer from "../Components/Footer/Footer/Footer";

const Home:NextPage = () => {
    return (
        <React.Fragment>
            <Header/>
            <Main/>
            <Rated/>
            <Major/>
            <Footer/>
        </React.Fragment>
    );
};

export default Home;
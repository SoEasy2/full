import React from 'react';
import Logo from "../Logo/Logo";
import classes from "./Header.module.scss"
import SearchForm from "../SearchForm/SearchForm";
import Profile from "../Profile/Profile";
import Container from "../../Container/Container";
const Header:React.FC = () => {
    return (
        <header className={classes.header}>
            <Container>
                <div className={classes.wrapper}>
                    <Logo/>
                    <SearchForm/>
                    <Profile/>
                </div>
            </Container>
        </header>
    );
};

export default Header;
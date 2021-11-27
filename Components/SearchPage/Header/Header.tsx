import React from 'react';
import Logo from "../Logo/Logo";
import classes from "./Header.module.scss"
import SearchForm from "../SearchForm/SearchForm";
import Profile from "../Profile/Profile";
import Container from "../../Container/Container";
interface IProps{
    setFavourite(obj:Boolean):void
}
const Header:React.FC<IProps> = ({setFavourite}) => {
    return (
        <header className={classes.header}>
            <Container>
                <div className={classes.wrapper}>
                    <Logo/>
                    <SearchForm/>
                    <Profile setFavourite={setFavourite}/>
                </div>
            </Container>
        </header>
    );
};

export default Header;
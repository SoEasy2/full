import React from 'react';
import ButtonSignIn from "../ButtonSignIn/ButtonSignIn";
import ButtonFind from "../ButtonFind/ButtonFind";
import classes from './Header.module.scss'
import HeaderLink from "../HeaderLink/HeaderLink";
import { useSelector } from 'react-redux';
import { IRootReducer } from '../../../../redux/rootReducer/state';

interface IHeaderProps{
    stateModal():void;
}

const Header:React.FC<IHeaderProps> = ({stateModal}) => {
    const user = useSelector((state:IRootReducer) => state.user)
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <div className={classes.wrapper}>
                    <div>
                        <a href="#" className={classes.logo}>pinktada</a>
                    </div>
                    <div className={classes.right}>
                        <nav className="menu">
                            <ul className={classes.menu_items}>
                                <HeaderLink>Buy</HeaderLink>
                                <HeaderLink>For Sale</HeaderLink>
                                <HeaderLink>Insight</HeaderLink>
                                <HeaderLink>Contact</HeaderLink>
                            </ul>
                        </nav>
                            <ButtonFind>Find Nearby</ButtonFind>
                        {!user ? <ButtonSignIn stateModal={stateModal}>Sign In</ButtonSignIn> :null}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
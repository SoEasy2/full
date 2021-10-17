import React from 'react';
import classes from './ButtonSignIn.module.scss'
interface IButtonSignInProps{
    stateModal():void;
}
const ButtonSignIn:React.FC<IButtonSignInProps> = ({stateModal,children}) => {
    return (
        <button className={classes.button} onClick={stateModal}>
            {children}
        </button>
    );
};

export default ButtonSignIn;
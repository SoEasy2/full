import React, {useState} from 'react';
import classes from "./ModalSign.module.scss"

interface IModalSignProps{
    stateModal():void;
}

const ModalSign:React.FC<IModalSignProps> = ({stateModal}) => {
    return (
        <div className={classes.modal} >
            <div className={classes.modal__content}>
                <div className={classes.modal__container}>
                        <div className={classes.close}><button className={classes.closeBtn} onClick={stateModal}>X</button></div>
                        <h6 className={classes.title}>Sign in</h6>
                          <div className={classes.wrapper}>

                        <form action="" className={classes.form}>
                            <label className={classes.label} htmlFor="select">
                                Country/Region
                            </label>
                            <select className={classes.select} id="select"></select>
                            <label className={classes.label} htmlFor="input">
                                Phone Number
                            </label>
                            <input className={classes.inputLoc} id="input" type="text"/>
                        </form>
                        <div className=""><button className={classes.passRec}>Forgot password?</button></div>

                        <button className={classes.continue}>Continue</button>
                        <div className=""><hr/></div>

                        <button className={classes.btnGoogle}>Sign in with Google</button>
                        <button className={classes.btnFacebook}>Sign in with Facebook</button>
                        <button className={classes.btnApple}>Sign in with Apple</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalSign;
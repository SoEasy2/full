import { Formik } from 'formik';
import React, {useState} from 'react';
import classes from "./ModalSign.module.scss"
import {schemaSignIn, schemaSignUp} from '../../yup/schemaSignIn'
import {useDispatch, useSelector } from 'react-redux';
import { ILoginArguments } from '../../redux/user/types/handlers/ILoginArguments';
import { IRootReducer } from '../../redux/user/reducer/state';
import { Dispatch } from 'redux';
import { ILogin } from '../../redux/user/types/auth';
import { AuthActions } from '../../redux/user/actions';
import {useRouter} from 'next/router'
import { useCookies } from 'react-cookie';

import ReactSession from 'react-client-session';
interface IModalSignProps{
    stateModal():void;
    signIn(values:ILogin):void;
    signUp(values:ILogin):void;

}



const ModalSign:React.FC<IModalSignProps> = ({stateModal, signIn, signUp}) => {

    const user = useSelector((state:IRootReducer) => state.user)
    const [isTabSignIn, setTabSignIn] = useState(true)
    const router = useRouter()
    const handleSignIn = (values) =>{
        signIn(values)
    }

    const handleSignUp = (values) =>{
        const obj = {
            email:values.signUpEmail,
            password:values.signUpPassword
        }
        signUp(obj)
    }
    return (
        <div className={classes.modal}>

            <div className={classes.modal__content}>
                <div className={classes.close}><button className={classes.closeBtn} onClick={stateModal}>X</button></div>
                <div className={classes.modal__container}>
                    <div className={classes.tabs}>
                        <div className={isTabSignIn ? `${classes.tabSignIn} ${classes.activeTabs}` :`${classes.tabSignIn}`} onClick={()=>setTabSignIn(true)}>SignIn</div>
                        <div className={isTabSignIn ? `${classes.tabSignUp}` :`${classes.tabSignUp} ${classes.activeTabs}`} onClick={()=>setTabSignIn(false)}>SignUp</div>
                    </div>
                          <div className={classes.wrapper}>
                              <div className={isTabSignIn ? `${classes.formContent} ${classes.activeForm}` :`${classes.formContent}`}>
                                  <h6 className={classes.title}>Sign in</h6>
                                  <Formik
                                      initialValues={{
                                          email:'',
                                          password:'',

                                      }}
                                      validateOnBlur
                                      onSubmit={(values)=> {
                                          handleSignIn(values);
                                          console.log(true)

                                      }}
                                      validationSchema ={schemaSignIn}
                                  >
                                      {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty})=>(
                                          <div className={classes.form}>
                                              <label className={classes.label} htmlFor="email">
                                                  Email
                                              </label>
                                              <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.email} name="email" className={classes.inputLoc} id="email"/>
                                              {touched.email && errors.email && <p className={classes.error}>{errors.email}</p>}
                                              <label className={classes.label}  htmlFor="password">
                                                  Password
                                              </label>
                                              <input className={classes.inputLoc} onChange={handleChange} onBlur={handleBlur} value={values.password} name="password" id="password" type="password"/>
                                              {touched.password && errors.password && <p className={classes.error}>{errors.password}</p>}
                                              <button className={classes.continue} onClick={()=>handleSubmit()} disabled={!isValid && !dirty}  type={'submit'} >Continue</button>
                                          </div>
                                      )}
                                  </Formik>
                              </div>
                              <div className={!isTabSignIn ? `${classes.formContent} ${classes.activeForm}` :`${classes.formContent}`}>
                                  <h6 className={classes.titleSingUp}>Sign up</h6>
                                  <Formik
                                  initialValues={{
                                      signUpEmail:'',
                                      signUpConfirmEmail:'',
                                      signUpPassword:'',
                                      signUpConfirmPassword:''
                                  }}
                                  validateOnBlur
                                  onSubmit={(values)=> {
                                      handleSignUp(values);
                                      console.log(true);
                                      router.push('confirm')

                                  }}
                                  validationSchema ={schemaSignUp}
                                  >
                                      {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty})=>(
                                          <div className={classes.form}>
                                              <label className={classes.label} htmlFor="signUpEmail">
                                                  Email
                                              </label>
                                              <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.signUpEmail} name="signUpEmail" className={classes.inputLoc} id="signUpEmail"/>
                                              {touched.signUpEmail && errors.signUpEmail && <p className={classes.error}>{errors.signUpEmail}</p>}
                                              <label className={classes.label} htmlFor="signUpConfirmEmail">
                                                  Confirm Email
                                              </label>
                                              <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.signUpConfirmEmail} name="signUpConfirmEmail" className={classes.inputLoc} id="signUpConfirmEmail"/>
                                              {touched.signUpConfirmEmail && errors.signUpConfirmEmail && <p className={classes.error}>{errors.signUpConfirmEmail}</p>}
                                              <label className={classes.label}  htmlFor="signUpPassword">
                                                  Password
                                              </label>
                                              <input className={classes.inputLoc} onChange={handleChange} onBlur={handleBlur} value={values.signUpPassword} name="signUpPassword" id="signUpPassword" type="password"/>
                                              {touched.signUpPassword && errors.signUpPassword && <p className={classes.error}>{errors.signUpPassword}</p>}
                                              <label className={classes.label} htmlFor="signUpConfirmPassword">
                                                  Confirm password
                                              </label>
                                              <input className={classes.inputLoc} onChange={handleChange} onBlur={handleBlur} value={values.signUpConfirmPassword} id="signUpConfirmPassword" name="signUpConfirmPassword" type="password"/>
                                              {touched.signUpConfirmPassword && errors.signUpConfirmPassword && <p className={classes.error}>{errors.signUpConfirmPassword}</p>}
                                              <button className={classes.continue} onClick={()=>handleSubmit()} disabled={!isValid && !dirty}  type={'submit'} >Register</button>
                                          </div>
                                      )}
                                  </Formik>
                              </div>

                          </div>
                </div>
            </div>
        </div>
    );
};


export default ModalSign;
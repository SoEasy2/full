import axios from "axios";
import { ContentTypes } from ".";
import {checkUserURL, logoutUserURL, signInURL, signUpURL } from "../../constants/auth";
import { ILogin, ISignUp } from "../../types/auth";

export function signIn (data: ILogin){
    return axios({
        url: signInURL,
        method: 'POST',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
        },
        data,
    });
}

export function checkUser(){
    return axios({
        url:checkUserURL,
        method: 'POST',
        headers:{
            'Content-Type':ContentTypes.APPLICATION_JSON

        },
        withCredentials:true,

    })
}
export function logoutUser(){
    return axios({
        url:logoutUserURL,
        method:'POST',
        headers:{
            'Content-Type':ContentTypes.APPLICATION_JSON
        },
        withCredentials:true
    })
}

export function signUp (data: ISignUp) {
    return axios({
        url: signUpURL,
        method: 'POST',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
        },
        data,
    });
}
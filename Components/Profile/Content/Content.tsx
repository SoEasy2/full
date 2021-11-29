import React, {useEffect, useState } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { bookApartament } from '../../../http/api';
import { IRootReducer } from '../../../redux/rootReducer/state';
import { AuthActions } from '../../../redux/user/actions';
import Appartaments from './Appartaments/Appartaments';
import TopList from './TopList/TopList';

const Content = () => {
    const user = useSelector((state:IRootReducer) => state.user)
    const [book, setBook] = useState<any>([])

    const getBook = async () =>{
        return await bookApartament(user.email)
    }
    const state = async ()=>{
        const response = await getBook()
        setBook([...response.data])
    }

    useEffect(()=>{

        if(user){
         state()
        }
    },[user])
    return (
        <div>
           <TopList book={book}/>
            <Appartaments book={book}/>
        </div>
    );
};

export default Content;
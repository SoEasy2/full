import React, { useEffect, useState } from 'react';
import { IRootReducer } from '../../../redux/rootReducer/state';
import {useDispatch, useSelector } from 'react-redux';
import Card from './Card/Card';
import CardList from './CardList/CardList';
import classes from './Favorite.module.scss'
import { checkFavourite } from '../../../http/api';
import { UserActions } from '../../../redux/user/actions';
interface IProps{
    data:Array<any>,
    stateFavorite(obj:Boolean):void,
    isFavorite:boolean
}
const Favorite:React.FC<IProps> = ({data,isFavorite,stateFavorite}) => {

    const dispatch = useDispatch()


    return (
        <div className={isFavorite ? `${classes.favorite} ${classes.active}` : `${classes.favorite}`}>
            <button onClick={()=>stateFavorite(false)}>X</button>
            <div className={classes.container}>
                <div className={classes.wrapper}>
                <h6 className={classes.title}>Favorite</h6>
                    <div className={classes.overflow}>
                        <CardList data={data}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Favorite;
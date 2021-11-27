import { useRouter } from 'next/dist/client/router';
import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { favourite } from '../../../../http/api';
import { IRootReducer } from '../../../../redux/rootReducer/state';
import {AuthActions, UserActions } from '../../../../redux/user/actions';
import classes from './Card.module.scss'

interface IProps{
    id:string,
    bathrooms:number,
    bedrooms:number,
    beds:number,
    star:number,
    price:number,
    img:string

}
const Card:React.FC<IProps> = ({id, price, bedrooms, beds, bathrooms, img, star}) => {
    const user = useSelector((state:IRootReducer) => state.user)
    const dispatch = useDispatch()
    const handlerFavorite = async () =>{
        const {data} = await favourite({email:user.email, appartament:id})
        dispatch(UserActions.setUserFavourite({...user, favoriteAppartaments:[...data]}))
        dispatch(AuthActions.checkUser())
    }
    const router = useRouter()
    const routing = () =>{
        router.push(`appartament/${id}`)
    }
    return (
        <div className={classes.div}>

            <div className={classes.wrapperBtn}>
                <button className={classes.remove} onClick={()=>handlerFavorite()}>X</button>
            </div>
            <h6>Title</h6>
            <div className={classes.wrapper}>
                <div><img className={classes.img} src={img}/></div>
                <div className={classes.info}>
                    <li className={classes.li}>
                        <p className={classes.text}>Bathrooms:{bathrooms}</p>
                    </li>
                    <li className={classes.li}>
                        <p className={classes.text}>Bedrooms:{bedrooms}</p>
                    </li>
                    <li className={classes.li}>
                        <p className={classes.text}>Beds:{beds}</p>
                    </li>
                    <li className={classes.li} >
                        <p className={classes.text}>Star:{star}</p>
                    </li>
                </div>
            </div>
            <div className={classes.bot}>
                <button className={classes.link} onClick={()=>routing()}>Go to view</button>
                <p className={classes.price}>$40 - ${price}</p>
            </div>
        </div>
    );
};

export default Card;
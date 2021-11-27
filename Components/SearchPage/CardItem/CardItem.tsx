import { useRouter } from 'next/dist/client/router';
import React, {useState} from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { favourite } from '../../../http/api';
import liked from "../../../public/liked.svg";
import unliked from "../../../public/unLiked.svg"
import { IRootReducer } from '../../../redux/rootReducer/state';
import {AuthActions, UserActions } from '../../../redux/user/actions';
import { IUser } from '../../../redux/user/types/user';
import classes from "./CardItem.module.scss"
interface IProps{
    id:string
    name:string,
    avgRating:string,
    reviewsCount:string,
    starRating:string,
    price:string,
    img:string,
}
const CardItem:React.FC<IProps> = ({name, avgRating, id, reviewsCount, starRating, price, img}) => {
    const user = useSelector((state:IRootReducer) => state.user)
    const dispatch = useDispatch()
    const [isFavorite, setFavorite] = useState(false);
    const handlerFavorite = async () =>{
        setFavorite(!isFavorite)
        const {data} = await favourite({email:user.email, appartament:id})
        dispatch(UserActions.setUserFavourite({...user, favoriteAppartaments:[...data]}))
        dispatch(AuthActions.checkUser())
    }

    const routing = () =>{
        router.push(`appartament/${id}`)
    }
    const router = useRouter()

    return (<>
            {user ? <div className={classes.cardFavorite}><img className={classes.img} src={isFavorite ? liked : unliked}
                                                        onClick={handlerFavorite}/></div> : null}
        <div className={classes.card} onClick={routing}>
            <img src={img} className={classes.cardLeft}/>
            <div className={classes.cardCenter}>
                <p className={classes.cardText}>{name}</p>
                <h5 className={classes.cardName}>Double Tree by Hilton Hotel & Suites</h5>
                <p className={classes.cardAvailable}>Available</p>
                <p className={classes.cardInfo}>Air Conditioned. 24hr .Beach Front. Business center </p>
                <div className={classes.cardRate}>{starRating}<span>({reviewsCount})</span></div>
            </div>
            <div className={classes.cardRight}>

                <div className={classes.cardPrice}>$40 - ${price}</div>
            </div>
        </div>
        </>
    );
};

export default connect()(CardItem);

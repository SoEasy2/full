import React, {useState} from 'react';
import liked from "../../../public/liked.svg";
import unliked from "../../../public/unLiked.svg"
import classes from "./CardItem.module.scss"

const CardItem:React.FC = () => {
    let favorite;
    const [isFavorite, setFavorite] = useState(false);
    const handlerFavorite = () =>{
        setFavorite(!isFavorite)
    }
    isFavorite ? favorite = liked : favorite = unliked;
    return (
        <div className={classes.card}>
            <div className={classes.cardLeft}>
            </div>
            <div className={classes.cardCenter}>
                <p className={classes.cardText}>PATH trains & lower Manhattan</p>
                <h5 className={classes.cardName}>Double Tree by Hilton Hotel & Suites</h5>
                <p className={classes.cardAvailable}>Available</p>
                <p className={classes.cardInfo}>Air Conditioned. 24hr .Beach Front. Business center </p>
                <div className={classes.cardRate}>5.0<span>(34)</span></div>
            </div>
            <div className={classes.cardRight}>
                <div className={classes.cardFavorite}><img className={classes.img} src={favorite} onClick={handlerFavorite}/></div>
                <div className={classes.cardPrice}>$130 - $450</div>
            </div>
        </div>
    );
};

export default CardItem;
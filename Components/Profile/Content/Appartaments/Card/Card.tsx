import React from 'react';
import classes from './Card.module.scss'
interface IProps{
    img:string,
    star:number,
    city:string,
    rooms:number
}
const Card:React.FC<IProps> = ({img, rooms, star, city}) => {
    return (
        <div className={classes.wrapperTop}>
            <div className={classes.img}><img className={classes.images} src={img} alt=""/></div>
            <div className={classes.room}>${rooms}</div>
            <div className={classes.hotel}>{star}</div>
            <div className={classes.destination}>{city}</div>
            <div className={classes.date}>30.11.2021</div>
            <div className={classes.date}>5.12.2021</div>
        </div>
    );
};

export default Card;
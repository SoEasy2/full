import React from 'react';
import Reviews from '../Reviews/Reviews';
import classes from './TopImages.module.scss'
interface IProps{
    appartament:any
}
const TopImages:React.FC<IProps> = ({appartament}) => {
    return (
        <>
            <h6 className={classes.title}>{appartament.listing.name}</h6>
            <div className={classes.desk}>
                <a href="#" className={classes.deskLink}>Haymarket</a>
                <p>SUPERHOST</p>
                <Reviews appartament={appartament}/>
            </div>
            <div className={classes.imgs}>
                <img className={classes.mainImg} src={appartament.listing.pictureUrl} alt=""/>
                <div className={classes.images}>
                    <img className={classes.img} src={appartament.listing.contextualPictures[0].picture} alt=""/>
                    <img className={`${classes.img} ${classes.img3}`} src={appartament.listing.contextualPictures[1].picture} alt=""/>
                    <img className={classes.img} src={appartament.listing.contextualPictures[2].picture} alt=""/>
                    <img className={`${classes.img} ${classes.img4}`} src={appartament.listing.contextualPictures[3].picture} alt=""/>
                </div>
            </div>
        </>
    );
};

export default TopImages;
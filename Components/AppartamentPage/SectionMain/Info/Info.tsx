import React from 'react';
import classes from './Info.module.scss'
import InfoList from './InfoList/InfoList';
interface IProps{
    appartament:any
}
const Info:React.FC<IProps> = ({appartament}) => {
    return (
        <>
            <div className={classes.infoWrapper}>
                <h6 className={classes.titleInfo}>{appartament.listing.publicAddress}</h6>
                <img src={appartament.listing.user.pictureUrl} className={classes.img} alt="img"/>
            </div>
            <InfoList beds={appartament.listing.beds} bethrooms={appartament.listing.bathrooms} guests={appartament.listing.guestLabel.split(' ')[0]} bedrooms={appartament.listing.bedrooms} key={appartament._id}/>
            <hr/>
        </>
    );
};

export default Info;
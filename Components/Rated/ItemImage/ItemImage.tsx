import React from 'react';
import classes from "./ItemImage.module.scss"

interface IItemImage{
    numberImage:String
}

const ItemImage:React.FC<IItemImage> = ({numberImage}) => {
    return (
        <div className={classes.containerImg} >

        </div>
    );
};

export default ItemImage;
import React from 'react';
import Overflow from "../Overflow/Overflow";
import CardItem from "../CardItem/CardItem";

const CardItemList = () => {
    return (
        <Overflow>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
        </Overflow>
    );
};

export default CardItemList;
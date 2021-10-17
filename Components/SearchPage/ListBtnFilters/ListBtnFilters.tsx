import React, {useState} from 'react';
import classes from "./ListBtnFilters.module.scss"
import ItemBtnFilter from "../ItemBtnFilter/ItemBtnFilter";
import BtnFilter from "../BtnFilter/BtnFilter";

const ListBtnFilters:React.FC = () => {
    let name = [classes.list];
    const [filterIsOpen, filterOpen] = useState(false);
    if (filterIsOpen){
        name.push(classes.active)
    }
    const filterState = ()=>{
        filterOpen(!filterIsOpen)
    }
    return (
        <div className={classes.btns}>
            <div className={name.join(" ")}>
                <ItemBtnFilter>All</ItemBtnFilter>
                <ItemBtnFilter>Available</ItemBtnFilter>
                <ItemBtnFilter>3 star</ItemBtnFilter>
                <ItemBtnFilter>Price</ItemBtnFilter>
                <ItemBtnFilter>Top Rated</ItemBtnFilter>
            <span>|</span>
            </div>
            <BtnFilter filterState={filterState}>Filters</BtnFilter>
        </div>
    );
};

export default ListBtnFilters;
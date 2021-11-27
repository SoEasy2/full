import React, { useState} from 'react';
import classes from "./ListBtnFilters.module.scss"
import BtnFilter from "../BtnFilter/BtnFilter";
import { connect, useSelector } from 'react-redux';
import { MapActions } from '../../../redux/map/actions/actions';
import { Dispatch } from 'redux';
import { IRootReducer } from '../../../redux/rootReducer/state';
import { IDataMap } from '../../../redux/mapDate/types/types';
type ILoginContainerProps = ReturnType<typeof mapDispatchToProps>
const ListBtnFilters:React.FC<ILoginContainerProps> = ({sortPlus, sortMinus, filterFiveStar, filterAll}) => {
    const appartament = useSelector((state:IRootReducer) => state.map)
    const mapData = useSelector((state:IRootReducer)=>state.mapData)
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
                <button className={classes.btn} onClick={()=>filterAll(mapData)}>All</button>
                <button className={classes.btn} onClick={()=>filterFiveStar(appartament)}>5 star</button>
                <button className={classes.btn} onClick={()=>sortPlus(appartament)}>Price plus</button>
                <button className={classes.btn} onClick={()=>sortMinus(appartament)}>Price minus</button>
                <button className={classes.btn}>Top Rated</button>
            <span>|</span>
            </div>
            <BtnFilter filterState={filterState}>Filters</BtnFilter>
        </div>
    );
};
const mapDispatchToProps = (dispatch:Dispatch) => ({
    sortPlus:(payload:Array<Object>) => dispatch(MapActions.sortAppartamentPricePlus(payload)),
    sortMinus:(payload:Array<Object>) => dispatch(MapActions.sortAppartamentPriceMinus(payload)),
    filterFiveStar:(payload:Array<Object>)=> dispatch(MapActions.filterAppartamentFiveStar(payload)),
    filterAll:(payload)=> dispatch(MapActions.filterAllAppartament(payload))
})
export default  connect(null, mapDispatchToProps)(ListBtnFilters);
import React, {useState} from 'react';
import classes from "./BtnFilter.module.scss"

interface IBtnFilterProps{
    filterState():void
}


const BtnFilter:React.FC<IBtnFilterProps> = ({children,filterState}) => {
    const [isOpenFilter, openFilter] = useState(false);
    let name = [classes.filter];
    if (isOpenFilter){
        name.push(classes.active)
    }
    const handlerBtn = () =>{
        openFilter(!isOpenFilter);
        filterState();
    }

    return (
        <button onClick={handlerBtn} className={name.join(" ")}>{children}</button>
    );
};

export default BtnFilter;
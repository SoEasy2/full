import React, {useState} from 'react';
import classes from "./ItemBtnFilter.module.scss"
const ItemBtnFilter:React.FC = ({children}) => {
    let name = [classes.btn];
    const [isBtnActive, btnActive] = useState(false);
    if (isBtnActive){
        name.push(classes.active)
    }
    const btnState = ()=>{
        btnActive(!isBtnActive)
    }
    return (
        <button onClick={btnState} className={name.join(" ")}>{children}</button>
    );
};

export default ItemBtnFilter;
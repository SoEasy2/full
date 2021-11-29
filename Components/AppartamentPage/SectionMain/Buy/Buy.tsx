import React from 'react';
import { useState } from 'react';
import Reviews from '../Reviews/Reviews';
import classes from './Buy.module.scss'
import ModalPayment from './ModalPayment/ModalPayment';
interface IProps{
    appartament:any
}
interface IStateDate{
    startDate:string,
    endDate:string
}
const Buy:React.FC<IProps> = ({appartament}) => {
    const [isOpen, setOpen] = useState<Boolean>(false)
    const [stateForm, setStateForm] = useState<IStateDate>({startDate:'', endDate:''})
    const [isError, setError] = useState<Boolean>(false)
    const changeInputHandler = (event)=>{
        setStateForm(prev=>({...prev,...{[event.target.name]:event.target.value}}))
        console.log(stateForm)
    }
    const clickBuyHandler = () =>{
        if(stateForm.endDate && stateForm.endDate && (Date.parse(stateForm.startDate)<Date.parse(stateForm.endDate))){
            setOpen(true)
            setError(false)
        }else{
            setError(true)
        }
    }
    return (
        <>
        <div className={classes.infoBuy}>
            <div className={classes.containerBuy}>
                <div className={classes.infoPrice}>
                    <div className={classes.price}>${appartament.pricingQuote.rateWithServiceFee.amount}/night</div>
                <Reviews appartament={appartament}/>
                </div>
                <hr/>
                <div className={classes.dates}>
                    <div><label htmlFor="in" className={classes.label}>Start-date</label>
                        <input name={'startDate'} onChange={(event)=>changeInputHandler(event)} className={classes.input} type="date" id={'in'}/></div>
                    <div className={classes.border}></div>
                    <div><label htmlFor="out" className={classes.label}>End-date</label>
                        <input name={'endDate'} onChange={(event)=>changeInputHandler(event)} className={classes.input} type="date" id={'out'}/></div>
                </div>
                <div className={classes.errorContainer}>
                    {isError ? <p className={classes.error}>Please enter correct data</p> : null}
                </div>
                <button className={classes.button} onClick={()=>clickBuyHandler()}>Book Now</button>
            </div>
        </div>
            {isOpen ? <ModalPayment stateForm={stateForm} setState={setOpen} data={appartament}/> :null}
        </>
    );
};

export default Buy;
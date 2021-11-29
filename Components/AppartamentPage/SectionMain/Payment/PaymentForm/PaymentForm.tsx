import {CardElement, CardElementComponent, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { payment } from '../../../../../http/api';
import { IRootReducer } from '../../../../../redux/rootReducer/state';
import classes from './PaymentForm.module.scss'
interface IStateDate{
    startDate:string,
    endDate:string
}
interface IProps{
    data:any,
    stateForm:IStateDate
}
const PaymentForm:React.FC<IProps> = ({data,stateForm}) => {
    const user = useSelector((state:IRootReducer) => state.user)
    const [succes, setSucces] = useState(false)
    const stripe = useStripe()
    const router = useRouter()
    const elements = useElements()
    const handleSubmit = async (event)=>{
        event.preventDefault()
        if(!stripe || !elements){
            return
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card:elements.getElement(CardElement)!,
        })
        if (paymentMethod){
            const obj ={
                id:paymentMethod.id,
                amount:data.pricingQuote.rateWithServiceFee.amount,
                idUser:user.id,
                idAppartament:data._id,
                description:data.listing.name,
                currency:'USD',
                startDate:stateForm.startDate,
                endDate:stateForm.endDate,
                city:data.listing.city,
                hotel:data.listing.hotel
            }
            await payment(obj)
            router.push('/profile')
        }
        else {return}
    }

    return (
        <form onSubmit={(e)=>handleSubmit(e)} className={classes.form}>
          <label className={classes.label}>
              Card details
              <CardElement
              />
          </label>
            <button type="submit" disabled={!stripe} onClick={(event)=>handleSubmit(event)} className={classes.button}>
                Payment
            </button>
        </form>
    );
};

export default PaymentForm;
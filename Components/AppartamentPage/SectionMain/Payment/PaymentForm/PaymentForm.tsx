import {CardElement, CardElementComponent, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { payment } from '../../../../../http/api';
import { IRootReducer } from '../../../../../redux/rootReducer/state';
import classes from './PaymentForm.module.scss'

interface IProps{
    data:any
}
const PaymentForm:React.FC<IProps> = ({data}) => {
    const user = useSelector((state:IRootReducer) => state.user)
    const [succes, setSucces] = useState(false)
    const stripe = useStripe()
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
        console.log(data.pricingQuote.rateWithServiceFee.amount )
        if (paymentMethod){
            const obj ={
                id:paymentMethod.id,
                amount:data.pricingQuote.rateWithServiceFee.amount,
                idUser:user.id,
                idAppartament:data._id,
                description:data.listing.name,
                currency:'USD'
            }
            console.log(obj)
            await payment(obj)
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
            <button type="submit" disabled={!stripe} className={classes.button}>
                Payment
            </button>
        </form>
    );
};

export default PaymentForm;
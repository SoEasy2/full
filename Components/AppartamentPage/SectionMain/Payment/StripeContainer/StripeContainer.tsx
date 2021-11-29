import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js'
import React from 'react';
import Config from '../../../../../Config';
import PaymentForm from '../PaymentForm/PaymentForm';
import classes from './StripeContainer.module.scss'
const stripeTestPromise = loadStripe(Config.STRIPE_KEY)
interface IStateDate{
    startDate:string,
    endDate:string
}
interface IProps{
    data:any,
    stateForm:IStateDate
}
const StripeContainer:React.FC<IProps> = ({data,stateForm}) => {

    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm data={data} stateForm={stateForm}/>
        </Elements>
    );
};

export default StripeContainer;
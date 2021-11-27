import Stripe from 'stripe'
import Config from '../../config/config'
export const stripe = new Stripe(Config.stripe.secretAPI,{
    apiVersion:'2020-08-27'
})
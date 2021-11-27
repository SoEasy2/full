import * as _ from 'lodash'
const environment = process.env.NODE_ENV || 'development';
interface IConfig{
    environment:string;
    BASE_URL:string,
    STRIPE_KEY:string,
    GOOGLE_API_KEY:string
}
export default _.extend<IConfig>({
    environment
},
    require(`${__dirname}/env/${environment}`).default,
)

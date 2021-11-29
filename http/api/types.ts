export interface IPayment{
    id:string,
    idUser:number,
    idAppartament:string,
    amount:number,
    description:string,
    currency:string,
    endDate:string,
    startDate:string,
    city:string,
    hotel:string
}
export interface IFavourite{
    email:string,
    appartament:string
}
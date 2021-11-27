export interface ICordinate{
    lat:string,
    lng:string
}
export interface ILocation{
    loaded:boolean,
    coordinates:ICordinate,
    error:IError | null
}
export interface IError{
    code:number,
    message:string
}
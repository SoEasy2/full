import {Column, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";
import { User } from "./user.entity";

@Entity()
export class BookApartamentsEntity {
    @PrimaryColumn({type:'int', unique:true, generated:'increment'})
    id:number;

    @ManyToOne(type => User, userFavouriteAppartament => userFavouriteAppartament.favouriteAppartament)
    user:User;

    @Column({type:'varchar', nullable:false})
    appartament:string;

    @Column({type:'varchar', nullable:false})
    endDate:string

    @Column({type:'varchar', nullable:false})
    startDate:string

    @Column({type:'date', nullable:false, default:new Date()})
    dateBook:Date



}

function OneToMany(arg0: () => any, arg1: (user: any) => any) {
    throw new Error("Function not implemented.");
}

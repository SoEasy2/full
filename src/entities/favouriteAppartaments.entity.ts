import {Column, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";
import { User } from "./user.entity";

@Entity()
export class FavouriteAppartamentsEntity {
    @PrimaryColumn({type:'int', unique:true, generated:'increment'})
    id:number;

    @ManyToOne(type => User, userFavouriteAppartament => userFavouriteAppartament.favouriteAppartament)
    user:User;

    @Column({type:'varchar', nullable:false})
    appartament:string;


}

function OneToMany(arg0: () => any, arg1: (user: any) => any) {
    throw new Error("Function not implemented.");
}

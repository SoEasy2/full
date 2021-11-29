import { User } from "src/user/entity/user.entity";
import {Column, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";


@Entity()
export class FavouriteAppartamentsEntity {
    @PrimaryColumn({type:'int', unique:true, generated:'increment'})
    id:number;

    @ManyToOne(type => User, userFavouriteAppartament => userFavouriteAppartament.favouriteAppartament)
    user:User;

    @Column({type:'varchar', nullable:false})
    apartament:string;
}


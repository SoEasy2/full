import { ApiProperty } from "@nestjs/swagger";
import { User } from "../../user/entity/user.entity";
import {Column, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";


@Entity()
export class FavouriteAppartamentsEntity {
    @ApiProperty({type:Number, description:'Primary key'})
    @PrimaryColumn({type:'int', unique:true, generated:'increment'})
    id:number;

    @ApiProperty({type:String, description:'Apartament id'})
    @Column({type:'varchar', nullable:false})
    apartament:string;

    @ManyToOne(type => User, userFavouriteAppartament => userFavouriteAppartament.favouriteAppartament)
    user:User;
}


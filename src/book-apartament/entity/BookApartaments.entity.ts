import { User } from "../../user/entity/user.entity";
import {Column, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";


@Entity()
export class BookApartamentsEntity {
    @PrimaryColumn({type:'int', unique:true, generated:'increment'})
    id:number;


    @Column({type:'varchar', nullable:false})
    apartament:string;

    @Column({type:'varchar', nullable:false})
    endDate:string

    @Column({type:'varchar', nullable:false})
    startDate:string

    @Column({type:'date', nullable:false, default:new Date()})
    dateBook:Date

    @ManyToOne(type => User, userBookApartaments => userBookApartaments.bookApartaments)
    user:User;

}

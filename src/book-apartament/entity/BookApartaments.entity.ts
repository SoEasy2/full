import { User } from "../../user/entity/user.entity";
import {Column, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";
import { ApiProperty } from "@nestjs/swagger";


@Entity()
export class BookApartamentsEntity {
    @ApiProperty({type:Number, description:'Primary key'})
    @PrimaryColumn({type:'int', unique:true, generated:'increment'})
    id:number;

    @ApiProperty({type:String, description:'Apartament id'})
    @Column({type:'varchar', nullable:false})
    apartament:string;
    @ApiProperty({type:String, description:'End date'})
    @Column({type:'varchar', nullable:false})
    endDate:string
    @ApiProperty({type:String, description:'Start date'})
    @Column({type:'varchar', nullable:false})
    startDate:string
    @ApiProperty({type:Date, description:'Date'})
    @Column({type:'date', nullable:false, default:new Date()})
    dateBook:Date

    @ManyToOne(type => User, userBookApartaments => userBookApartaments.bookApartaments)
    user:User;

}

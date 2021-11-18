import {Column, Entity, OneToOne, PrimaryColumn} from "typeorm";
import {User} from "./user.entity";

@Entity()
export class Confirm {
    @PrimaryColumn({type:'int', unique:true, generated:'increment'})
    id:number;

    @Column({type:'varchar', nullable:false})
    token:string;

    @Column({type:'date', nullable:false})
    date:Date;

    @OneToOne(()=>User, user=>user.confirm)
    user:User;
}
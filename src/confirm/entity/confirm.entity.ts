import { User } from "src/user/entity/user.entity";
import {Column, Entity, OneToOne, PrimaryColumn} from "typeorm";


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
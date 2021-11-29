import {Column, Entity, JoinColumn, OneToOne, PrimaryColumn} from "typeorm";
import {User} from "./user.entity";

@Entity()
export class ForgottenPasswordEntityEntity{
    @PrimaryColumn({type:'int', unique:true, generated:'increment'})
    id:number;
    @Column({type:"date"})
    timestap:Date;
    @Column({type:"varchar", unique:true})
    newPasswordToken:string;
    @OneToOne(()=>User, user=>user.forgottenPassword)
    @JoinColumn()
    user:User;

}
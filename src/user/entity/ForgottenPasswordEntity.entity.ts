import { ApiProperty } from "@nestjs/swagger";
import {Column, Entity, JoinColumn, OneToOne, PrimaryColumn} from "typeorm";
import {User} from "./user.entity";

@Entity()
export class ForgottenPasswordEntity{
    @ApiProperty({example:1, description:'Primary key'})
    @PrimaryColumn({type:'int', unique:true, generated:'increment'})
    id:number;
    @ApiProperty({example:"12.02.2021", description:'Date'})
    @Column({type:"date"})
    timestap:Date;
    @ApiProperty({example:'', description:"unique string for new password:58373065"})
    @Column({type:"varchar", unique:true})
    newPasswordToken:string;
    @OneToOne(()=>User, user=>user.forgottenPassword)
    @JoinColumn()
    user:User;

}
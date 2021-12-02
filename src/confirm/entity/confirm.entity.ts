import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/user/entity/user.entity";
import {Column, Entity, OneToOne, PrimaryColumn} from "typeorm";


@Entity()
export class Confirm {
    @ApiProperty({type:Number, description:'Primary key'})
    @PrimaryColumn({type:'int', unique:true, generated:'increment'})
    id:number;

    @ApiProperty({type:String, description:'Token verify account'})
    @Column({type:'varchar', nullable:false})
    token:string;

    @ApiProperty({type:Date, description:'Date'})
    @Column({type:'date', nullable:false})
    date:Date;

    @OneToOne(()=>User, user=>user.confirm)
    user:User;
}
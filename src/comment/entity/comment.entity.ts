import { User } from "src/user/entity/user.entity";
import {Column, Entity, JoinColumn, ManyToOne, OneToMany} from "typeorm";


@Entity()
export class CommentEntity{
    @Column({primary:true, generated:"increment", unique:true, nullable:false, type:"int"})
    id: number;

    @Column({ nullable:false, type:"varchar"})
    description: string;

    @Column({nullable:false, type:"int"})
    rate:number;

    @Column({nullable:false, type:"date", default:new Date(2021,2,2)})
    date: Date;

    @ManyToOne(type => User, user => user.comments)
    user:User;
}
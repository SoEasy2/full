import {Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {CommentEntity} from "./comment.entity";
import {ApiProperty} from "@nestjs/swagger";
import {Confirm} from "./confirm.entity";
import {ForgottenPasswordEntityEntity} from "./ForgottenPasswordEntity.entity";

@Entity()
export class User {
    @ApiProperty({example:'1', description:'Primary key'})
    @Column({primary:true, generated:"increment", unique:true, nullable:false, type:"int"})
    id: number;

    @ApiProperty({example:'user@mail.ru', description:'Email'})
    @Column({ nullable:false, unique:true, type:"varchar"})
    email: string;

    @ApiProperty({example:'123qweqwe123', description:'Password'})
    @Column({nullable:false, type:"varchar"})
    password: string;

    @ApiProperty({example:false, description:'Verified account'})
    @Column({nullable:false, default:false})
    valid:boolean;

    @Column({nullable:true, type:'varchar', unique:true})
    refreshToken:string;

    @OneToOne(()=>Confirm, confirm=>confirm.user)
    @JoinColumn()
    confirm:Confirm;
    @OneToOne(()=>ForgottenPasswordEntityEntity, forgottenPassword =>forgottenPassword.user)
    @JoinColumn()
    forgottenPassword:ForgottenPasswordEntityEntity;
    @OneToMany(type => CommentEntity, comment => comment.user)
    comments: CommentEntity[];
}
import {Entity, Column, PrimaryColumn} from 'typeorm';

//Admin table model
@Entity()
export class Admin{
    //Admin email
    @PrimaryColumn()
    email: string;
    
    //Admin password
    @Column()
    password: string;
}
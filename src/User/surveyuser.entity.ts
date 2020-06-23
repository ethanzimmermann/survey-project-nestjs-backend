import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';


@Entity()
export class SurveyUser{
    @PrimaryGeneratedColumn()
    id: Number;
    
    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    emailAddress: string;

    @Column()
    phoneNumber: string;

    @Column()
    admin: string;
}
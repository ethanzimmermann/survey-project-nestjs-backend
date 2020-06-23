import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

//SurveyUser table model
@Entity()
export class User{
    //User id
    @PrimaryGeneratedColumn()
    id: Number;
    
    //User first name
    @Column()
    firstName: string;

    //User last name
    @Column()
    lastName: string;

    //User email address
    @Column()
    emailAddress: string;

    //User phone number
    @Column()
    phoneNumber: string;

    //Admin who created the user
    @Column()
    admin: string;
}
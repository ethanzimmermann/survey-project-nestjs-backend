import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

//Survey Table Model
@Entity()
export class Survey{
    //Survey's Id
    @PrimaryGeneratedColumn()
    id: Number;
    
    //List of answers to survey questions
    @Column({array: true})
    answers: string;

    //User filling out the survey
    @Column()
    user: Number;

    //Template/source of survey questions
    @Column()
    template: Number;

    //Status of survey (notviewed, viewed, in-progress, or completed)
    @Column()
    status: string;
}
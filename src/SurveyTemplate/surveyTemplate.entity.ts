import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

//Survey Template table model
@Entity()
export class SurveyTemplate{
    //Id for template
    @PrimaryGeneratedColumn()
    id: Number;
    
    //Name of the template
    @Column()
    name: string;

    //List of questions
    @Column({array: true})
    questions: string;

    //Admin who created the template
    @Column()
    admin: string;
}
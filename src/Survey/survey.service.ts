import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Survey } from './survey.entity';
import { SurveyUser } from '../User/surveyuser.entity';

@Injectable()
export class SurveyService { 
    constructor(@InjectRepository(Survey) private readonly surveyRepository: Repository<Survey>,
    @InjectRepository(SurveyUser) private readonly surveyUserRepository: Repository<SurveyUser>){}

    //Get all surveys of a template type
    findSurveysByTemplate(templateId: number){
        return this.surveyRepository.find({template: templateId});
    }

    //Get survey by id
    findSurvey(surveyId: number): Promise<Survey> {
        return this.surveyRepository.findOne({id: surveyId});
    }

    //Save survey
    saveSurvey(survey: Survey): Promise<Survey>{
        return this.surveyRepository.save(survey);
    }
}
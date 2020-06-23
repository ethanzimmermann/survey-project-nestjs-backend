import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SurveyTemplate } from './surveyTemplate.entity';

@Injectable()
export class SurveyTemplateService { 
    constructor(@InjectRepository(SurveyTemplate) private readonly surveyTemplateRepository: Repository<SurveyTemplate>){}

    //Get all survey templates created by a given admin
    findAllForAdmin(adminEmail: string): Promise<SurveyTemplate[]> {
        return this.surveyTemplateRepository.find({admin: adminEmail});
    }

    //Save survey template
    saveSurveyTemplate(surveyTemplate: SurveyTemplate){
        this.surveyTemplateRepository.save(surveyTemplate);
    }

    //Get template by id
    findTemplate(templateId: Number): Promise<SurveyTemplate>{
        return this.surveyTemplateRepository.findOne({id: templateId});
    }

}
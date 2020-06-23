import { Get, Post, Controller, Body, Param } from '@nestjs/common';
import { SurveyTemplateService } from './surveyTemplate.Service';
import { SurveyTemplate } from './surveyTemplate.entity';
import { SurveyUser } from '../User/surveyuser.entity';
import { MailerService } from '@nestjs-modules/mailer';
import { ENGINE_METHOD_RAND } from 'constants';
import { json } from 'express';
import { SurveyTemplateModule } from './surveyTemplate.module';

@Controller('SurveyTemplate')

export class SureyTemplateController {
    constructor(private readonly surveyTemplateService: SurveyTemplateService,
        private readonly mailerService: MailerService) {}


    //Save survey template
    @Post()
    async saveSurveyTemplate(@Body() surveyTemplate: SurveyTemplate){
        return this.surveyTemplateService.saveSurveyTemplate(surveyTemplate);
    }

    //Get all survey templates created by a given admin
    @Get(':adminEmail')
    async templatesForAdmin(@Param() params): Promise<SurveyTemplate[]> {
        return this.surveyTemplateService.findAllForAdmin(params.adminEmail);
    }

    //Get template by id
    @Get('GetTemplate/:id')
    async getTemplate(@Param('id') id: Number): Promise<SurveyTemplateModule>{
        return this.surveyTemplateService.findTemplate(id);
    }
}
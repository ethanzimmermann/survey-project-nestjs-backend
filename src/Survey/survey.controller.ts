import { Get, Post, Controller, Body, Param } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { UserService } from '../User/user.service';
import { SurveyUser } from "../User/surveyuser.entity";
import { Survey } from './survey.entity';
import { SurveyTemplate } from '../surveyTemplate/surveyTemplate.entity';

import { MailerService } from '@nestjs-modules/mailer';
import { ENGINE_METHOD_RAND } from 'constants';
import { json } from 'express';
import { get } from 'http';

@Controller('Survey')

export class SurveyController {
    constructor(private readonly surveyService: SurveyService,
        private readonly userService: UserService,
        private readonly mailerService: MailerService) {}

    //Get survey by id
    @Get(":id")
    async findSurvey(@Param('id') id: number): Promise<Survey> {
        return this.surveyService.findSurvey(id);
    }

    //Get all surveys of a template type
    @Get("GetSurveysByTemplate/:templateId")
    async findSurveysByTemplate(@Param("templateId") templateId: number): Promise<Survey[]> {
        return this.surveyService.findSurveysByTemplate(templateId);
    }

    //Save survey
    @Post()
    async saveSurvey(@Body() survey: Survey){
        return this.surveyService.saveSurvey(survey);
    }

    //Save posted surveys and send a link for the survey to a list of usres
    @Post('SendSurvey')
    async sendSurvey(@Body('template') template: SurveyTemplate, @Body('surveys') surveys: Survey[]){
        //for all posted surveys
        for(var i=0; i<surveys.length; i++){
            //save the survey
            let survey = (await this.surveyService.saveSurvey(surveys[i]));
            //get the email address for the survey
            let email = (await this.userService.findUser(surveys[i].user)).emailAddress;
            //send an email with a link to the survey
            this.mailerService.sendMail({
                to: email,
                from: "noreply@nestjs.com",
                subject: "Testing survey email",
                text: JSON.stringify(surveys[i]) + JSON.stringify(template),
                html: "<a href='localhost:4200/survey?surveyId="+survey.id+"'>Take this survey: localhost:4200/survey?surveyId="+survey.id+"</a>"
            }).then(success => {}).catch(error=>console.log(error));
        }
    }
}
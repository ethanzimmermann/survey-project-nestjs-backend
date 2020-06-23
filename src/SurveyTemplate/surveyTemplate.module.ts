import { Module } from '@nestjs/common';
import { SurveyTemplateService } from './surveyTemplate.Service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyTemplate } from './surveyTemplate.entity';
import { SureyTemplateController } from './surveyTemplate.controller';

@Module({
    providers: [SurveyTemplateService],
    imports: [TypeOrmModule.forFeature([SurveyTemplate])],
    controllers: [SureyTemplateController],
    exports: [SurveyTemplateService]
})
export class SurveyTemplateModule {}
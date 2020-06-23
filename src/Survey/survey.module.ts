import { Module } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { UserService } from '../User/user.service';
import { UserModule } from '../User/user.module'
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '../database/database.module'
import { Survey } from './survey.entity';
import { SurveyController } from './survey.controller';
import { SurveyUser } from '../user/surveyuser.entity';
import { SurveyTemplate } from '../SurveyTemplate/surveyTemplate.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Module({
    providers: [ SurveyService ],
    imports: [TypeOrmModule.forFeature([Survey]), UserModule],
    controllers: [SurveyController],
    exports: [SurveyService]
})
export class SurveyModule {}
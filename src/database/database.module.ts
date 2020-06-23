import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Survey } from '../Survey/survey.entity';
import { SurveyTemplate } from '../SurveyTemplate/surveyTemplate.entity';
import { User } from '../User/user.entity';
import { SurveyUser } from '../User/surveyuser.entity';
import { Admin } from '../Admin/admin.entity';

@Module({
    //Set connection to the postgres db
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'password',
        database: 'survey',
        entities: [Admin, Survey, SurveyTemplate, SurveyUser],
        synchronize: true
    })]
})
export class DatabaseModule {}

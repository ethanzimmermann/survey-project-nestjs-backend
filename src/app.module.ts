import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AdminController } from './Admin/admin.controller';
import { SurveyController } from './Survey/survey.controller';
import { SureyTemplateController } from './SurveyTemplate/surveyTemplate.controller';
import { UserController } from './User/user.controller';
import { AdminModule } from './Admin/admin.module';
import { SurveyModule } from './Survey/survey.module';
import { SurveyTemplateModule } from './SurveyTemplate/surveyTemplate.module';
import { UserModule } from './User/user.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Survey } from './Survey/survey.entity';
import { SurveyTemplate } from './SurveyTemplate/surveyTemplate.entity';
import { SurveyUser } from './User/surveyuser.entity';
import { Admin } from './Admin/admin.entity';


@Module({
  //Set mailer settings using testing email address
  imports: [MailerModule.forRoot({
    transport: {
      service: 'gmail',
      auth: {
        user: "bryllyantsurveytest@gmail.com",
        pass: "thispasswordrocks"
      }
    },
    defaults: {
      from:'"nest-modules" <modules@nestjs.com>',
    },
    template: {
      dir: __dirname + '/templates',
      adapter: new HandlebarsAdapter(),
      options: {
        strict: true,
      },
    },
  }), 
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'survey',
    entities: [Admin, Survey, SurveyTemplate, SurveyUser],
    synchronize: true
}),
//DatabaseModule,
    AdminModule, SurveyModule, SurveyTemplateModule, UserModule],
  controllers: [AdminController, SurveyController, SureyTemplateController, UserController],
  providers: [],
})
export class AppModule {}

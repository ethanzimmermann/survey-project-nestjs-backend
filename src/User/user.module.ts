import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { SurveyUser } from './surveyuser.entity';
import { UserController } from './user.controller';

@Module({
    providers: [UserService],
    imports: [TypeOrmModule.forFeature([SurveyUser])],
    controllers: [UserController],
    exports: [UserService, TypeOrmModule.forFeature([SurveyUser])]
})
export class UserModule {}
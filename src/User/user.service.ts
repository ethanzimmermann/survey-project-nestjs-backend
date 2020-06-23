import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { SurveyUser } from './surveyuser.entity';


@Injectable()
export class UserService { 
    constructor(@InjectRepository(SurveyUser) private readonly userRepository: Repository<SurveyUser>){}

    //Get all users created by a given admin
    findAllForAdmin(adminEmail: string): Promise<SurveyUser[]> {
        return this.userRepository.find({admin: adminEmail});
    }

    //Get user by id
    findUser(userId: Number): Promise<SurveyUser> {
        return this.userRepository.findOne({id: userId});
    }

    //Save posted user
    saveUser(user: SurveyUser){
        this.userRepository.save(user);
    }
}
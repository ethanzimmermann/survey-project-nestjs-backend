import { Get, Post, Controller, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { get } from 'http';
import { SurveyUser } from './surveyuser.entity';

@Controller('User')

export class UserController {
    constructor(private readonly userService: UserService) {}

    //Get all users created by a given admin
    @Get(':adminEmail')
    async usersForAdmin(@Param() params): Promise<SurveyUser[]> {
        return this.userService.findAllForAdmin(params.adminEmail);
    }

    //Get user by id
    @Get('GetUser/:id')
    async getUser(@Param('id') id: Number): Promise<SurveyUser> {
        return this.userService.findUser(id);
    }

    //Save posted user
    @Post()
    async saveUser(@Body() user: SurveyUser){
        return this.userService.saveUser(user);
    }
}
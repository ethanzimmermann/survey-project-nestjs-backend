import { Get, Post, Controller, Body } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Admin } from './admin.entity';

@Controller('Admin')

export class AdminController {
    constructor(private readonly adminService: AdminService) {}

    //Gets all admins
    @Get()
    async findAll(): Promise<Admin[]> {
        return this.adminService.findAll();
    }
    //Save a posted admin
    @Post()
    async saveAdmin(@Body() admin: Admin){
        return this.adminService.saveAdmin(admin);
    }

    //Checks if admin exists in the database
    @Post('CheckAdmin')
    async checkAdmin(@Body() admin: Admin): Promise<Admin>{
        return this.adminService.findOne(admin);
    }
}
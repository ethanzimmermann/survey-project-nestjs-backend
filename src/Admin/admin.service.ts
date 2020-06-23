import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './admin.entity';

@Injectable()
export class AdminService { 
    constructor(@InjectRepository(Admin) private readonly adminRepository: Repository<Admin>){}

    //Gets all admins
    findAll(): Promise<Admin[]> {
        return this.adminRepository.find();
    }

    //Save a posted admin
    saveAdmin(admin: Admin){
        this.adminRepository.save(admin);
    }

    //Checks if admin exists in the database
    findOne(admin: Admin): Promise<Admin>{
        return this.adminRepository.findOne({email: admin.email, password: admin.password})
    }
}
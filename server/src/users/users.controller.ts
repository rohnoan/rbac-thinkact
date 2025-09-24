// users/users.controller.ts
import { Controller,Get,Post,Delete,Param } from "@nestjs/common";
@Controller('users')
export class UsersController {
  
  @Get() 
  getAllUsers() {
    return 'Get ALL users across ALL orgs'; // Superadmin dashboard
  }
}
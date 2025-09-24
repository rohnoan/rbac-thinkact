// users/users.controller.ts
import { Controller,Get,Post,Delete,Param } from "@nestjs/common";
@Controller('users')
export class UsersController {
  
  @Get() 
  getAllUsers() {
    return 'Get ALL users across ALL orgs'; // Superadmin dashboard
  }

  @Get(':id') 
  getUserById(@Param('id') id: string) {
    return `Get user ${id} from any org`; // Global user lookup
  }

  @Delete(':id') 
  deleteUser(@Param('id') id: string) {
    return `Hard delete user ${id} from system`; // Remove completely
  }
}
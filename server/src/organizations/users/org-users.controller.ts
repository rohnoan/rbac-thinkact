import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller('organizations')
export class OrgUsersController {
  @Get(':orgId/users')
  getAllUsers(@Param('orgId') orgId: string) {
    return `List of users in organization ${orgId}`;
  }

  @Get(':orgId/users/:userId')
  getUserById(@Param('orgId') orgId: string, @Param('userId') userId: string) {
    return `User ${userId} in organization ${orgId}`;
  }

  @Post(':orgId/users/invite')
  inviteUser(@Param('orgId') orgId: string, @Body() body: any) {
    return `Invited user to organization ${orgId} with data: ${JSON.stringify(body)}`;
  }

  @Patch(':orgId/users/:userId')
  updateUserRole(@Param('orgId') orgId: string, @Param('userId') userId: string, @Body() body: any) {
    return `Updated role of user ${userId} in organization ${orgId} with data: ${JSON.stringify(body)}`;
  }

  @Delete(':orgId/users/:userId')
  deleteUser(@Param('orgId') orgId: string, @Param('userId') userId: string) {
    return `Deleted user ${userId} from organization ${orgId}`;
  }
}

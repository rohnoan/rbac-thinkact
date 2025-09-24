import { Module } from '@nestjs/common';
import { OrganizationsController } from './organizations.controller';
import { OrganizationsService } from './organizations.service'; 
import { OrgUsersController } from './users/org-users.controller';

@Module({
  controllers: [OrganizationsController,OrgUsersController],
  providers: [OrganizationsService],
  imports: []
})
export class OrganizationsModule {}

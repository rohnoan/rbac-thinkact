import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganizationsModule } from './organizations/organizations.module';
import { UsersModule } from './users/users.module';
import { OrgUsersModule } from './org/users/org-users/org-users.module';

@Module({
  imports: [OrganizationsModule, UsersModule, OrgUsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { OrgUsersController } from './org-users.controller';
 
@Module({
  controllers: [OrgUsersController],
  providers: [ ],
  exports: [ ], // Export service if other modules need it
})
export class OrgUsersModule {}
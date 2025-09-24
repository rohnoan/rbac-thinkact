import { IsString, IsNotEmpty, IsIn } from 'class-validator';
import { Role } from '../schema/user.schema';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  clerkId: string; // Clerk user ID

  @IsString()
  @IsIn(['superadmin', 'admin', 'member'])
  //role: Role;

  @IsString()
  @IsNotEmpty()
  orgClerkId: string; // Clerk org ID this user belongs to
}
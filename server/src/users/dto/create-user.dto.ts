// src/users/dto/create-user.dto.ts
import { IsString, IsNotEmpty, IsIn } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  clerkId: string; // Clerk user ID (from Clerk API after invite/signup)

  @IsString()
  @IsNotEmpty()
  orgClerkId: string; // The org this user belongs to (Clerk org ID)

  @IsString()
  @IsIn(['admin', 'member'])
  role: 'admin' | 'member'; // initial RBAC role
}

import { IsString, IsIn } from 'class-validator';

export class UpdateUserRoleDto {
  @IsString()
  @IsIn(['superadmin', 'admin', 'member'])
  role: 'superadmin' | 'admin' | 'member';
}

import { IsString, IsOptional } from 'class-validator';

export class UpdateOrgUserDto {
  @IsString()
  @IsOptional()
  role?: 'admin' | 'member';

  @IsString()
  @IsOptional()
  name?: string;
}
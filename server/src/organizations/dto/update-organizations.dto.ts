import { IsOptional, IsString } from 'class-validator';

export class UpdateOrganisationDto {
  @IsOptional()
  @IsString()
  name?: string;
}

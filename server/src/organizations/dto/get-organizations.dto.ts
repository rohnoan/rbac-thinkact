import { IsOptional, IsString } from 'class-validator';

export class GetOrganisationsDto {
  @IsOptional()
  @IsString()
  search?: string; // search by org name
}

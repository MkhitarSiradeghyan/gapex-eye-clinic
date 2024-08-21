import { IsString, IsOptional } from 'class-validator';

export class UpdatePersonnelDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  role?: string;
}

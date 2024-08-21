import { IsString } from 'class-validator';

export class CreatePersonnelDto {
  @IsString()
  name: string;

  @IsString()
  role: string;
}

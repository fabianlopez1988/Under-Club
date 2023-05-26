import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAgencyDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  nationality: string;

  @IsNotEmpty()
  @IsString()
  biography: string;

  @IsNotEmpty()
  photo: string;

  @IsNotEmpty()
  soundcloud: string;

  @IsNotEmpty()
  instagram: string;

  @IsNotEmpty()
  pressKit: string;
}

export class UpdateAgencyDto extends PartialType(CreateAgencyDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateResidentDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  nationality: string;

  @IsOptional()
  biography: string;

  @IsOptional()
  photo: string;

  @IsOptional()
  soundcloud: string;

  @IsOptional()
  instagram: string;

  @IsNotEmpty()
  @IsString()
  pressKit: string;
}

export class UpdateResidentDto extends PartialType(CreateResidentDto) {}

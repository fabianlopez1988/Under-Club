import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateNewDto {
  @IsNotEmpty()
  @IsString()
  readonly newsTitle: string;

  @IsNotEmpty()
  @IsString()
  readonly photo: string;

  @IsNotEmpty()
  @IsString()
  readonly newsDescription: string;

  @IsNotEmpty()
  @IsString()
  readonly newsBody: string;

  @IsNotEmpty()
  @IsString()
  readonly date: Date;
}

export class UpdateNewDto extends PartialType(CreateNewDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  @IsString()
  readonly date: Date;

  @IsNotEmpty()
  @IsString()
  readonly flyerLarge: string;

  @IsNotEmpty()
  @IsString()
  readonly flyerGrid: string;

  @IsNotEmpty()
  @IsString()
  readonly url: string;
}

export class UpdateEventDto extends PartialType(CreateEventDto) {}

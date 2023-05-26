import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEpisodeDto {
  @IsNotEmpty()
  @IsString()
  readonly flyer: string;

  @IsNotEmpty()
  @IsString()
  readonly intro: string;

  @IsNotEmpty()
  @IsString()
  readonly url: string;
}

export class UpdateEpisodeDto extends PartialType(CreateEpisodeDto) {}

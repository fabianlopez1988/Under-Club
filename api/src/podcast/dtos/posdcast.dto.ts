import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePodcastDto {
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

export class UpdatePodcastDto extends PartialType(CreatePodcastDto) {}

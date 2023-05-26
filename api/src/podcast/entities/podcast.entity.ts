import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PodcastDocument = Podcast & Document;

@Schema()
export class Podcast {
  @Prop()
  flyer: string;

  @Prop()
  intro: string;

  @Prop()
  url: string;
}

export const PodcastSchema = SchemaFactory.createForClass(Podcast);

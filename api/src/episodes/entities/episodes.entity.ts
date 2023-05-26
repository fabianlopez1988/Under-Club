import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type EpisodeDocument = Episode & Document;

@Schema()
export class Episode {
  @Prop()
  flyer: string;

  @Prop()
  intro: string;

  @Prop()
  url: string;
}

export const EpisodeSchema = SchemaFactory.createForClass(Episode);

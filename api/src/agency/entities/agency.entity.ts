import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type AgencyDocument = Agency & Document;

@Schema()
export class Agency {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  nationality: string;

  @Prop({ required: true })
  biography: string;

  @Prop({ required: true })
  photo: string;

  @Prop()
  soundcloud: string;

  @Prop()
  instagram: string;

  @Prop()
  pressKit: string;
}

export const AgencySchema = SchemaFactory.createForClass(Agency);

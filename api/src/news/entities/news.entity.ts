import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type NewDocument = New & Document;

@Schema()
export class New {
  @Prop()
  newsTitle: string;

  @Prop()
  photo: string;

  @Prop()
  newsDescription: string;

  @Prop()
  newsBody: string;

  @Prop()
  date: Date;
}

export const NewSchema = SchemaFactory.createForClass(New);

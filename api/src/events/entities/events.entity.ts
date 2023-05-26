import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type EventDocument = Event & Document;

@Schema()
export class Event {
  @Prop()
  date: Date;

  @Prop()
  flyerLarge: string;

  @Prop()
  flyerGrid: string;

  @Prop()
  url: string;
}

export const EventSchema = SchemaFactory.createForClass(Event);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ResidentDocument = Resident & Document;

@Schema()
export class Resident {
  @Prop({ required: true })
  name: string;

  @Prop()
  nationality: string;

  @Prop()
  biography: string;

  @Prop()
  photo: string;

  @Prop()
  soundcloud: string;

  @Prop()
  instagram: string;

  @Prop({ required: true })
  pressKit: string;
}

export const ResidentSchema = SchemaFactory.createForClass(Resident);

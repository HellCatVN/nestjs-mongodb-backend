import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AirVisualDocument = AirVisual & Document;

@Schema({ collection: 'AirVisual' })
export class AirVisual {
  @Prop()
  city: string;

  @Prop()
  state: string;

  @Prop()
  country: string;
}

export const AirVisualSchema = SchemaFactory.createForClass(AirVisual);

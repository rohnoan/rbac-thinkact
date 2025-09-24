import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true }) // auto adds createdAt & updatedAt
export class Organisation {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  clerkId: string; // maps to Clerk org ID
}

export type OrganisationDocument = Organisation & Document;
export const OrganisationSchema = SchemaFactory.createForClass(Organisation);

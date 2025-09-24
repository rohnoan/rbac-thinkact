import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type Role = 'superadmin' | 'admin' | 'member';

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  clerkId: string; // maps to Clerk user ID

  @Prop({ required: true })
  role: Role; // RBAC role

  @Prop({ required: true })
  orgClerkId: string; // the org this user belongs to (Clerk org ID)
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);

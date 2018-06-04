import { Document, Schema, Model, model } from 'mongoose';

export interface UserModel extends Document {
   id_user: Number;
   name: string;
   mail: string;
   updated: Date;
   created: Date;
}

const userSchema: Schema = new Schema({
   id_user: { type: Number, required: true },
   name: { type: String },
   mail: { type: String },
   updated: { type: Date, default: Date.now() },
   created: { type: Date, default: Date.now() },
});

export const user: Model<UserModel> = model<UserModel>('user', userSchema);

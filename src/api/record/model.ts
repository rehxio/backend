import { Document, Schema, Model, model } from 'mongoose';

export interface RecordModel extends Document {
   id_vehicle: Number;

   updated: Date;
   created: Date;
   parked: Boolean;
}

const recordSchema: Schema = new Schema({
   id_vehicle: { type: Number, required: true },

   updated: { type: Date, default: Date.now() },
   created: { type: Date, default: Date.now() },
   parked: { type: Boolean },
});

export const record: Model<RecordModel> = model<RecordModel>('record', recordSchema);

import { Document, Schema, Model, model } from 'mongoose';

export interface Point {
   latitude: number;
   longitude: number;
}

export interface RecordModel extends Document {
   id_vehicle: Number;
   id_user: Number;
   location: {
      type: [Number],
      index: '2dsphere'
   };
   created: Date;
   parked: Boolean;
}

const RecordSchema: Schema = new Schema({
   id_vehicle: { type: Number, required: true },
   id_user: { type: Number, required: true },
   location: { type: [Number], index: '2dsphere' },
   created: { type: Date, default: Date.now() },
   parked: { type: Boolean },
});

export const Record: Model<RecordModel> = model<RecordModel>('record', RecordSchema);

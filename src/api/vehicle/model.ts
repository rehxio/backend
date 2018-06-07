import { Document, Schema, Model, model } from 'mongoose';

export interface VehicleModel extends Document {
   id_vehicle: Number;
   id_user: Number;
   identifier: String;
   updated: Date;
   created: Date;
}

const VehicleSchema: Schema = new Schema({
   id_vehicle: { type: Number, required: true },
   id_user: { type: Number, required: true },
   identifier: { type: String, required: true },
   updated: { type: Date, default: Date.now() },
   created: { type: Date, default: Date.now() },

});

export const Vehicle: Model<VehicleModel> = model<VehicleModel>('vehicle', VehicleSchema);
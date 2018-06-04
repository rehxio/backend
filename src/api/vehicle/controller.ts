import { vehicle } from './model';

export const getVehicle = (vehicleID) => {
  return vehicle.find({ id_vehicle: { $in: [`${vehicleID}`] } });
};

export const getVehicles = () => {
  return vehicle.find();
};

export const newVehicle = (vehicle) => {
  const vehicleToCreate = new vehicle({ ...vehicle });
  return vehicleToCreate.save();
};

export const updateVehicle = (vehicle, vehicleID) => {
  return vehicle.findOneAndUpdate({ id_user: { $in: [`${vehicleID}`] } }, { $set: vehicle }, { new: true });
};

export const deleteVehicle = (vehicleID) => {
  return vehicle.findOneAndRemove({ id_vehicle: { $in: [`${vehicleID}`] } });
};

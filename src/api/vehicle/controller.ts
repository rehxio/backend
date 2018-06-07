import { Vehicle } from './model';

export const getVehicle = (vehicleID) => {
  return Vehicle.find({ id_vehicle: { $in: [`${vehicleID}`] } });
};

export const getVehicles = () => {
  return Vehicle.find();
};

export const newVehicle = (vehicle) => {
  const vehicleToCreate = new Vehicle({ ...vehicle });
  return vehicleToCreate.save();
};

export const updateVehicle = (vehicle, vehicleID) => {
  return Vehicle.findOneAndUpdate({ id_user: { $in: [`${vehicleID}`] } }, { $set: vehicle }, { new: true });
};

export const deleteVehicle = (vehicleID) => {
  return Vehicle.findOneAndRemove({ id_vehicle: { $in: [`${vehicleID}`] } });
};

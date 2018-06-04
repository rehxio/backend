import { user } from './model';

export const getUser = (userID) => {
  return user.find({ id_user: { $in: [`${userID}`] } });
};

export const getUsers = () => {
  return user.find();
};

export const newUser = (user) => {
  const userToCreate = new user({ ...user });
  return userToCreate.save();
};

export const updateUser = (user, userID) => {
  return user.findOneAndUpdate({ id_user: { $in: [`${userID}`] } }, { $set: user }, { new: true });
};

export const deleteUser = (userID) => {
  return user.findOneAndRemove({ id_user: { $in: [`${userID}`] } });
};

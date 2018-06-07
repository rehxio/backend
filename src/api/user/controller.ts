import { User } from './model';

export const getUser = (userID) => {
  return User.find({ id_user: { $in: [`${userID}`] } });
};

export const getUsers = () => {
  return User.find();
};

export const newUser = (user) => {
  const userToCreate = new User({ ...user });
  return userToCreate.save();
};

export const updateUser = (user, userID) => {
  return User.findOneAndUpdate({ id_user: { $in: [`${userID}`] } }, { $set: user }, { new: true });
};

export const deleteUser = (userID) => {
  return User.findOneAndRemove({ id_user: { $in: [`${userID}`] } });
};

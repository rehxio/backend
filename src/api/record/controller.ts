import { record } from './model';

export const getRecord = (recordID) => {
  return record.find({ id_record: { $in: [`${recordID}`] } }); }
;

export const getRecords = () => {
  return record.find();
};

export const newRecord = (record) => {
  const recordToCreate = new record({ ...record });
  return recordToCreate.save();
};

export const updateRecord = (record, recordID) => {
  return record.findOneAndUpdate({ id_record: { $in: [`${recordID}`] } }, { $set: record }, { new: true });
};

export const deleteRecord = (recordID) => {
  return record.findOneAndRemove({ id_record: { $in: [`${recordID}`] } });
};

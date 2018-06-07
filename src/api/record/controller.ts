import { Record, Point } from './model';

export const getRecord = (recordID) => {
  return Record.find({ id_record: { $in: [`${recordID}`] } });
};

export const getRecords = () => {
  return Record.find();
};

export const getNear = (point: Point) => {
  const query = {
    location: {
      $near: {
        $geometry: {
           type: 'Point' ,
           coordinates: [ point.latitude, point.longitude ]
        },
        $maxDistance: 600,
      }
    }
  };
  return Record.find(query);
};

export const newRecord = (record) => {
  const recordToCreate = new Record({...record});

  return recordToCreate.save();
};

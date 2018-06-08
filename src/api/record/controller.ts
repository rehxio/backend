import { Record, Point } from './model';
import { oneHourAgo } from '../../utils/Utils';

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
        $maxDistance: 600
      }
    },
    created: { $gte: oneHourAgo() } // Busca en el campo "created" el valor que sea mayor que lo que devuelve oneHourAgo
  };
  return Record.find(query);
};

export const newRecord = (record) => {
  const recordToCreate = new Record({...record});

  return recordToCreate.save();
};

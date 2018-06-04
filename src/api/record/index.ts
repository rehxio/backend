import * as express from 'express';
import { getRecord, getRecords, newRecord , updateRecord, deleteRecord } from './controller';

const router = express.Router();

// Muestra un usuario identificado por id_record
router.get('/:recordID', (req, res) => {
  getRecord(req.params.recordID).then((record) => res.json(record)).catch((err) => res.status(500).send(err));
});

// Muestra todas las localizaciones
router.get('/', (req, res) => {
  getRecords().then((record) => res.json(record)).catch((err) => res.status(500).send(err));
});

// Añade una localización nueva
router.post('/', (req, res) => {
  newRecord(req.body).then((result) => res.json(result)).catch((err) => res.status(400).send(err));
});

// Actualiza la información de un usuario
router.put('/:recordID', (req, res) => {
  updateRecord(req.body, req.params.recordID).then((record) => res.json(record)).catch((err) => res.status(400).send(err));
});

// Elimina una película concreta pasando el ID
router.delete('/:recordID', (req, res) => {
  deleteRecord(req.params.recordID).then(() => res.send()).catch((err) => res.status(400).send(err));
});

export = router;

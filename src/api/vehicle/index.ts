import * as express from 'express';
import { getVehicle, getVehicles, newVehicle, updateVehicle, deleteVehicle } from './controller';

const router = express.Router();

// Muestra un vehiculo identificado por id_vehicle
router.get('/:vehicleID', (req, res) => {
  getVehicle(req.params.vehicleID).then((vehicle) => res.json(vehicle)).catch((err) => res.status(500).send(err));
});

// Muestra todos los vehiculos
router.get('/', (req, res) => {
  getVehicles().then((vehicle) => res.json(vehicle)).catch((err) => res.status(500).send(err));
});

// Añade un vehiculo nuevo
router.post('/', (req, res) => {
  newVehicle(req.body).then((result) => res.json(result)).catch((err) => res.status(400).send(err));
});

// Actualiza la información de un usuario
router.put('/:vehicleID', (req, res) => {
  updateVehicle(req.body, req.params.vehicleID).then((vehicle) => res.json(vehicle)).catch((err) => res.status(400).send(err));
});

// Elimina una película concreta pasando el ID
router.delete('/:vehicleID', (req, res) => {
  deleteVehicle(req.params.vehicleID).then(() => res.send()).catch((err) => res.status(400).send(err));
});
export = router;

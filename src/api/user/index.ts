import * as express from 'express';
import { getUser, getUsers, newUser , updateUser, deleteUser } from './controller';

const router = express.Router();

// Muestra un usuario identificado por id_user
router.get('/:userID', (req, res) => {
  getUser(req.params.userID).then((user) => res.json(user)).catch((err) => res.status(500).send(err));
});

// Muestra todos los usuarios
router.get('/', (req, res) => {
  getUsers().then((user) => res.json(user)).catch((err) => res.status(500).send(err));
});

// Añade un usuario nuevo
router.post('/', (req, res) => {
  newUser(req.body).then((result) => res.json(result)).catch((err) => res.status(400).send(err));
});

// Actualiza la información de un usuario
router.put('/:userID', (req, res) => {
  updateUser(req.body, req.params.userID).then((user) => res.json(user)).catch((err) => res.status(400).send(err));
});

// Elimina una película concreta pasando el ID
router.delete('/:userID', (req, res) => {
  deleteUser(req.params.userID).then(() => res.send()).catch((err) => res.status(400).send(err));
});

export = router;

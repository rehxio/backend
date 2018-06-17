import * as express from 'express';
import { getUser, getUserID, login, getUsers, newUser, updateUser, deleteUser } from './controller';

const router = express.Router();

// Muestra un usuario buscando por name
router.get('/search/:userName', (req, res) => {
  getUser(req.params.userName).then((user) => res.json(user)).catch((err) => res.status(500).send(err));
});

// Muestra un el ID de un usuario buscando por name
router.get('/id/:userName', (req, res) => {
  getUserID(req.params.userName, req).then(userID => res.send(userID)).catch((err) => res.status(500).send(err));
});

// Comprueba el inicio de sesión si existe el usuario y contraseña
// ************************* Terminar esto*************************
// Una vez el usuario haga login tenemos que hacer lo siguiente:
// 1. Le metemos una cookie con el valor del session
// 2. Guardamos en session los datos del usuario que más vamos a usar (userId, email...)
// 3. El resto de peticiones que nos haga deberemos de verificar que tiene el userId válido
router.post('/login', (req, res) => {
  login(req.body.name, req.body.password).then(user => {
    if (user) {
      // Si encontramos el usuario en la base de datos, Lo guardamos en la session
      req.session.userID = user._id;
      req.session.userMail = user.mail;
      // TODO aquí no deberíamos de enviarle el campo contraseña por ejemplo
      res.send(user);
    } else {
      // No es un usuario válido
      res.status(401).send('Invalid login');
    }
  }).catch(err => res.status(500).send(err));
});

// Muestra todos los usuarios
router.get('/', (req, res) => {
  getUsers().then((user) => res.json(user)).catch((err) => res.status(500).send(err));
});

// Añade un usuario nuevo
router.post('/add', (req, res) => {
  newUser(req.body, req.session.userID).then((result) => res.json(result)).catch((err) => res.status(400).send(err));
});

// Actualiza la información de un usuario
router.put('/update', (req, res) => {
  updateUser(req.body, req.session.userID).then((user) => res.json(user)).catch((err) => res.status(400).send(err));
});

// Elimina un usuario concreto pasando el ID
router.delete('/delete', (req, res) => {
  deleteUser(req.session.userID).then(() => res.send()).catch((err) => res.status(400).send(err));
});

export = router;

import * as express from 'express';
import * as morgan from 'morgan';
import * as request from 'superagent';
import * as session from 'express-session';
import * as methodOverride from 'method-override';
import * as compression from 'compression';
import * as notifier from 'node-notifier';
import { connect } from 'mongoose';

import * as userRouter from './api/user/index';
import * as vehicleRouter from './api/vehicle/index';
import * as recordRouter from './api/record/index';

const app = express();

// Morgan
app.use(morgan('combined'));

// Compression
app.use(compression());

// Express Session
app.use(session({ secret: 'SECRET!' }));
app.get('/', (req, res, next) => {
  if (req.session.views) {
    req.session.views++;
    res.send('Has visitado la página ' + req.session.views + ' veces.');
  } else {
    req.session.views = 1;
    res.send('Welcome');
  }
});



/*const errorHandler = (error, req, res, next) => {
  if (!error) {
    return next();
  }
  const message = `Error en ${req.method}, en la URL: ${req.url}`;
  console.log (request.post);
  request.post('SLACK_URL')
    .send({ text: 'Algo ha petado :monkey_face:', username: 'monkey-bot', icon_emoji: ':monkey_face:'})
    .end((err) => {
      next(err);
    });
};

app.use(methodOverride());
app.use(errorHandler);*/


app.use(express.json());
connect('mongodb://127.0.0.1:27017/pruebadb');
app.use('/user', userRouter);
app.use('/vehicle', vehicleRouter);
app.use('/record', recordRouter);

app.listen(3000);

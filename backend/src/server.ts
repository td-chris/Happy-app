import express from 'express';
// REQ / RES

import './database/connection';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);
//LOCALHOST:3333
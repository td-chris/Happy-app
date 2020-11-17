import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

// Comentarios Express

// Rota = conjunto da obra
// Recurso = usuario

// Métodos HTTP = GET, POST, PUT , DELETE

// GET = Buscar informação (lista, item)
// POST = Criando uma informação
// PUT = Editando uma infromação
// DELETE = Deletando uma infromação

// Parámetros

// Query Params: http//localhost:3333/users?search=christian
// Route Params: http//localhost:3333/users/1 (Identificar um recurso)
// Body: http//localhost:3333/users/1 (parametros vindos de um formulario)

routes.get("/orphanages", OrphanagesController.index);
routes.get("/orphanages/:id", OrphanagesController.show);
routes.post("/orphanages",upload.array('images') , OrphanagesController.create);

export default routes;
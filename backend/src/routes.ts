import { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();

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

routes.post("/orphanages", OrphanagesController.create);

export default routes;
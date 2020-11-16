import express from 'express';
// REQ / RES

import './database/connection';

const app = express();

app.use(express.json());

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

app.get("/users", (request, response) => {
    return response.json({ message: 'Hello World' });
});

app.listen(3333);
//LOCALHOST:3333
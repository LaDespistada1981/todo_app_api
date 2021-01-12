const express = require('express');

const usuariosController = require('./controllers/usuarios-controller');

const tarefasController = require('./controllers/tarefas-controller');

const port = 8080;

const app = express();

usuariosController(app);

tarefasController(app);
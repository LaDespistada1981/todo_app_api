const express = require('express');
const app = express();
const port = 8080;

const usuariosController = require('./controllers/usuarios-controller');
usuariosController(app);

const tarefasController = require('./controllers/tarefas-controller');
tarefasController(app);

app.listen(port, ()=>{
    console.log(`App rodando na porta ${port}`)
})
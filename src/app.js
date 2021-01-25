const express = require('express');
const bodyParser = require('body-parser');
const usuariosController = require('./controllers/usuarios-controller');
const tarefasController = require('./controllers/tarefas-controller');
const bd = require('./infra/bd')
const port = 8080;

const app = express();

app.use(bodyParser.json());


usuariosController(app,bd);
tarefasController(app, bd);


app.listen(port, ()=>{
    console.log(`[INFO]: Servidor rodando em localhost: ${port}`)
})
const express = require('express');
const bodyParser = require('body-parser');
const usuariosController = require('./controllers/usuarios-controller');
const tarefasController = require('./controllers/tarefas-controller');

const port = 8080;

const app = express();

app.use(bodyParser.json());


usuariosController(app);
tarefasController(app);


app.listen(port, ()=>{
    console.log(`[INFO]: Servidor rodando em localhost: ${port}`)
})
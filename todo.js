const express = require('express');

const app = express();

const port = 3001;

app.get(`/usuario`, (req, resp)=> {
    resp.send('Rota ativada com GET e recurso usuario')
});

app.listen(port, ()=> {
    console.log(`[INFO]: app rodando na porta: ${port}`)
});

app.get(`/tarefas`, (req, resp)=> {
    resp.send('Rota ativada com GET e recurso tarefas')
});


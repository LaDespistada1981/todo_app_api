const Tarefa = require('../models/usuario')
module.exports = (app, bd)=> {
    app.get('/tarefas', (req, resp)=> {
    resp.send(bd.tarefas);
    });

    app.post('/tarefas', (req, resp)=> {
        //utilizar o body da requisição para criar nova tarefa!
        const trf = new Tarefa(req.body.titulo, req.body.descricao, req.body.status, req.body.dataCriacao);
        //para guardar as tarefas no array
        bd.tarefas.push(trf);
        console.log(trf);
        resp.send('<h2>Rota POST de tarfa ok!</h2>');
    });
}
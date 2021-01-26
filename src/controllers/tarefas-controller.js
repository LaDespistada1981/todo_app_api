
const Tarefa = require('../models/tarefa');

module.exports = (app, bd)=> {
    app.get('/tarefas', (req, resp)=> {   
        resp.send(bd.tarefas);
    });

    app.get('/tarefas/:titulo', (req, resp)=> {
        for(let trf of bd.tarefas){
            if(trf.titulo == req.params.titulo){
                resp.send(trf)
            }
        }
        resp.send('Tarefa não encontrada!')

const Tarefa = require('../models/usuario')
module.exports = (app, bd)=> {
    app.get('/tarefas', (req, resp)=> {
    resp.send(bd.tarefas);

    });

    app.get('/tarefas/:dataCriacao', (req, resp)=> {
        for(let trf of bd.tarefas){
            if(trf.dataCriacao == req.params.dataCriacao){
                resp.send(trf)
            }
        }
        resp.send('Tarefa não encontrada!')
    });


    app.post('/tarefas', (req, resp)=> {
        //utilizar o body da requisição para criar nova tarefa!
        const trf = new Tarefa(req.body.titulo, req.body.descricao, req.body.status, req.body.dataCriacao);
        //para guardar as tarefas no array
        bd.tarefas.push(trf);
        console.log(trf);

        resp.send('<h2>Rota POST de tarefa ok!</h2>');

       

    });

    // app.delete('/tarefas', (_req, resp)=> {
    //     resp.send('Recebi uma solicitação de DELETE na rota /tarefas')
    // });
}
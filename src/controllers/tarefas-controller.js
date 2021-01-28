const Tarefa = require('../models/tarefa');
const TarefasDAO = require('../DAO/tarefas-dao');

module.exports = (app, bd)=> {

    const tarefasDAO = new TarefasDAO(bd)

    app.get('/tarefas', (req, resp)=> {  
        
        tarefasDAO.listaTarefas()

        .then((tarefas)=> {resp.send(tarefas)})

        .catch((error)=> {resp.send(error)})
    });


    app.get('/tarefas/:titulo', (req, resp)=> {
        for(let trf of bd.tarefas){
            if(trf.titulo == req.params.titulo){
                resp.send(trf)
            }
        }
        resp.send('Tarefa não encontrada!')
    })

    app.get('/tarefas/:dataCriacao', (req, resp)=> {
        for(let trf of bd.tarefas){
            if(trf.dataCriacao == req.params.dataCriacao){
                resp.send(trf)
            }
        }
        resp.send('Tarefa não encontrada!')
    })


    app.post('/tarefas', (req, resp)=> {

    });
}
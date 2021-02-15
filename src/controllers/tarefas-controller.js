const TarefasDAO = require('../DAO/tarefas-dao');

module.exports = (app, bd)=> {

    const tarefasDAO = new TarefasDAO(bd)


    app.get('/tarefas', async(req, resp)=> {  

        try {
            const listaTrfRet = await tarefasDAO.listaTarefaPorUserId()
        } catch {
            
        }
        
        tarefasDAO.listaTarefas()

        .then((tarefas)=> {resp.send(tarefas)})

        .catch((error)=> {resp.send(error)})
    });

    app.get('/tarefas/:id_usuario', async(req, resp)=> {
        
        try {
            const buscarTrfPorIdUsrRet = await tarefasDAO.buscarTarefasPorIdUsuario(req.params.id_usuario)
            resp.send(buscarTrfPorIdUsrRet)
        } catch {
            resp.send(`Tarefas de usuário não encontradas.`)
        }
    });


    app.post('/tarefas', (req, resp)=> {
        
        tarefasDAO.insertTarefas(req.body)

        .then((tarefas)=> {resp.send(tarefas)})

        .catch((error)=> {resp.send(error)})
    });


    app.put('/tarefas/:id', async(req, resp)=>{

        try {
            let atualizaTarefaRetorno =  await tarefasDAO.updateTarefa(req.params.id, req.body)
            resp.send(atualizaTarefaRetorno)
        }
        catch {
            resp.send('Erro ao atualizar tarefa.')
        }
    });


    app.delete('/tarefas/:id', async(req, resp)=>{

        try {
            resp.send(await tarefasDAO.deleteTarefa(req.params.id))
        } catch {
            resp.send(error)
        }
    });
}
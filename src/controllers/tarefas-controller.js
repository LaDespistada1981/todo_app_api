const TarefasDAO = require('../DAO/tarefas-dao');

module.exports = (app, bd)=> {

    const tarefasDAO = new TarefasDAO(bd)


    app.get('/tarefas', async(req, resp)=> {  

        try {
            const listaTrfRet = await tarefasDAO.listaTrf()
            resp.status(200).send(listaTrfRet)
        } catch {
            resp.send(error)
        }
    });

    app.get('/tarefas/:id_usuario', async(req, resp)=> {
        
        try {
            const buscarTrfPorIdUsrRet = await tarefasDAO.buscarTrfPorUsrId(req.params.id_usuario)
            resp.status(200).send(buscarTrfPorIdUsrRet)
        } catch {
            resp.send(`Tarefas de usuário não encontradas.`)
        }
    });


    app.post('/tarefas', async(req, resp)=> {
        
        try {
            const insereTrfRet = await tarefasDAO.insertTrf(req.body)
            resp.status(200).send(insereTrfRet)
        } catch {
            resp.send(error)
        }
    });


    app.put('/tarefas/:id', async(req, resp)=>{

        try {
            let atualizaTrfRet =  await tarefasDAO.updateTrf(req.params.id, req.body)
            resp.status(200).send(atualizaTrfRet)
        }
        catch {
            resp.send('Erro ao atualizar tarefa.')
        }
    });


    app.delete('/tarefas/:id', async(req, resp)=>{

        try {
            let deleteTrfRet = await tarefasDAO.deleteTrf(req.params.id)
            resp.status(200).send(deleteTrfRet)
        } catch {
            resp.send(error)
        }
    });
}
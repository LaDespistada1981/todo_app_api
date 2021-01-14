module.exports = (app)=> {
    app.get(`/tarefas`, (req, resp)=> {
    resp.send('<h2>Rota de tarefas ativada GET: rastreamento da aplicação sendo feita com nodemon</h2>')
    })

    app.post(`/tarefas`, (req, resp)=> {
        resp.send('<h2>Rota de tarefas ativada POST: tarefa adicionada ao bd</h2>')
        })
}


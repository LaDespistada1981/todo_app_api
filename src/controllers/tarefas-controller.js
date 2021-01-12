module.exports = (app)=> {
    app.get(`/tarefas`, (req, resp)=> {
    resp.send('Rota ativada com GET e recurso tarefas')
    });
}


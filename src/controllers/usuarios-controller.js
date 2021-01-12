module.exports = (app)=> {
    app.get(`/usuarios`, (req, resp)=> {
    resp.send('Rota ativada com GET e recurso tarefas')
    }); 
} 
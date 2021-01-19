module.exports = (app)=> {
    app.get('/tarefas', (req, resp)=> {
    resp.send('<h2>Rota GET de tarefas ativada: rastreamento da aplicação sendo feita com nodemon</h2>')
    });

    app.post('/tarefas', (req, resp)=> {
        
        console.log(`Request body issues:${req.body.curso}`)
        resp.send('<h2>Rota POST ok!</h2>')
    });
}
module.exports = (app)=> {
    app.get('/usuarios', (req, resp)=> {
    resp.send('<h2>Rota de usuários ativada GET: Rastreamento da aplicação sendo feita com nodemon</h2>')
    })

    app.post('/usuarios', (req, resp)=> {
        console.log(`Request body user:${req.body.nome}`)
        resp.send('<h2>Rota de usuários ativada Post: usuário adicionado ao bd</h2>')
    })
} 

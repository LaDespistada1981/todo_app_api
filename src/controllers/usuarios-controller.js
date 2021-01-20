const Usuario = require('../models/usuario');

module.exports = (app,bd)=> {
    app.get('/usuarios', (req, resp)=> {
    resp.send(bd.usuarios)
    })
    

    app.post('/usuarios', (req, resp)=> {
        //utilizar o body da requisição para criar novo usuário!
        const usr = new Usuario(req.body.nome, req.body.email, req.body.senha);
        //para guardar os usuários no array
        bd.usuarios.push(usr);
        console.log(bd);
        resp.send('Usuário cadastrado ok!');
    })
} 

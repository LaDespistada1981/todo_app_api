const UsuariosDAO = require('../DAO/usuarios-dao');

module.exports = (app, bd)=> {

    const usuariosDAO = new UsuariosDAO(bd)


    app.get('/usuarios', async(req, resp)=> {
        
        try {
            const listaUsuariosRetorno =  await usuariosDAO.listaUsuarios()
            resp.send(listaUsuariosRetorno)
        }
        catch {
            resp.send(error)
        }
    });

    app.get('/usuarios/:nome', (req, resp)=> {
        for(let usr of bd.usuarios){
            if(usr.nome == req.params.nome){
                resp.send(usr)
            }
        }
        resp.send('Usuário não encontrado!')
    });

    app.get('/usuarios/:email', (req, resp)=> {
        for(let usr of bd.usuarios){
            if(usr.email == req.params.email){
                resp.send(usr)
            }
        }
        resp.send('Usuário não encontrado');
    });


    app.post('/usuarios', async(req, resp)=> {
        
        try {
            const listaUsuariosRetorno =  await usuariosDAO.insertUsuarios(req.body)
            resp.send(listaUsuariosRetorno)
        }
        catch {
            resp.send(error)
        }
    });


    app.put('/usuarios/:id', async(req, resp)=>{

        try {
            let atualizaUsuarioRetorno =  await usuariosDAO.updateRegistroUsuarios(req.params.id, req.body)
            resp.send(atualizaUsuarioRetorno)
        }
        catch {
            resp.send('erro')
        }
    });


    app.delete('/usuarios/:id', async(req,resp)=>{
        
        try {
            let delecaoUsuarioRetorno = await usuariosDAO.deleteRegistroUsuarios(req.params.id)
            resp.send(delecaoUsuarioRetorno)
        } catch {
            resp.send(error)
        }
    });
}
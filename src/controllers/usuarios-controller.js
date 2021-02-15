const UsuariosDAO = require('../DAO/usuarios-dao');

module.exports = (app, bd)=> {

    const usuariosDAO = new UsuariosDAO(bd)


    app.get('/usuarios', async(req, resp)=> {
        
        try {
            const listaUsrRet =  await usuariosDAO.listaUsr()
            resp.send(listaUsrRet)
        }
        catch {
            resp.send(error)
        }
    });

    app.get('/usuarios/:email', async(req, resp)=> {

        try {
            const buscarUsrPorEmailRet = await usuariosDAO.buscarUsrPorEmail(req.params.email)
            resp.send(buscarUsrPorEmailRet)
        } catch {
            resp.send(error)
        }
    });


    app.post('/usuarios', async(req, resp)=> {
        
        try {
            const insereUsrRet =  await usuariosDAO.insertUsr(req.body)
            resp.send(insereUsrRet)
        }
        catch {
            resp.send(error)
        }
    });


    app.put('/usuarios/:id', async(req, resp)=>{

        try {
            let atualizaUsrRet =  await usuariosDAO.updateRegUsr(req.params.id, req.body)
            resp.send(atualizaUsrRet)
        }
        catch {
            resp.send('erro')
        }
    });


    app.delete('/usuarios/:id', async(req,resp)=>{
        
        try {
            let delecaoUsrRet = await usuariosDAO.deleteRegUsr(req.params.id)
            resp.send(delecaoUsrRet)
        } catch {
            resp.send(error)
        }
    });
}
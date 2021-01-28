const Usuario = require('../models/usuario');


module.exports = (app, bd)=> {

    const usuariosDAO = new UsuariosDAO(bd)

    app.get('/usuarios', (req, resp)=> {


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


    app.post('/usuarios', (req, resp)=> {


    });


    app.delete('/usuarios/:email', (req, resp)=>{
        //deleção de elemento no bd
        let usrNaoDelet = [];
        for(let i =0; i< bd.usuarios.length; i++){
            if(bd.usuarios[i].email !== req.params.email){
                usrNaoDelet.push(bd.usuarios[i])
            }
        }

        bd.usuarios = usrNDelet;
        console.log(bd.usuarios)
        resp.send(`Rota delete ativada! - Implementação pendente`)
    });

    //função criada para ser implementada na rota Put
    const atualizaRegistro =(email,body)=>{
        for(let usr of bd.usuarios){
            if(usr.email === email){
                usr.nome = body.nome;
                usr.senha = body.senha;
            }
        }
    }

    app.put('/usuarios/:email', (req, resp)=>{
    
        atualizaRegistro(req.params.email, req.body);
        resp.send("Usuário atualizado!")

        //para guardar os usuários no array
        bd.usuarios.push(usr);
        console.log(bd);
        resp.send('Usuário cadastrado ok!');
    })
}
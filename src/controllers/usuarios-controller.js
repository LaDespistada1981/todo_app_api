const Usuario = require('../models/usuario');

module.exports = (app,bd)=> {
    app.get('/usuarios', (req, resp)=> {
        bd.all("SELECT * FROM USUARIOS;", (err, rows)=>{
            if(err) throw new Error('Erro ao consultar tabela');
            else console.log(linhas);
        }
        resp.send(bd.usuarios)
    })
    

    app.post('/usuarios', (req, resp)=> {
        //utilizar o body da requisição para criar novo usuário!
        const usr = new Usuario(req.body.nome, req.body.email, req.body.senha);
        //para guardar os usuários no array
        bd.usuarios.push(usr);
        console.log(bd);
        resp.send('Usuário cadastrado no banco de dados!');
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
    const atualizaRegistro = (email,body)=>{
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

    })
} 

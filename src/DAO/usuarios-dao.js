module.exports = class UsuariosDAO {

    constructor(bd){
        this._bd = bd;
    }

    listaUsuarios() {
        return new Promise((resolve, reject)=> {

            this._bd.all("SELECT * FROM USUARIOS;", (error, linhas)=> 
            {
                if(error) reject(`Erro ao consultar: ${error}`);

                else resolve(linhas);
            })
        })
    }

    insertUsuarios(body) {
        return new Promise((resolve, reject)=> {

            this._bd.run("INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES(?,?,?)",
            [body.NOME, body.EMAIL, body.SENHA],
            (error)=>
            {
                if(error) {reject(`Erro ao tentar inserir ${error}`)} 

                else {resolve(`Usuário ${body.NOME} adicionado com sucesso!`)}
            })
        })
    }
}
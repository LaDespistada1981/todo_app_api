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

    
    updateRegistroUsuarios(id, body){
        return new Promise((resolve, reject)=>{
            this._bd.run("UPDATE USUARIOS SET NOME=?, EMAIL=?, SENHA=? WHERE ID=?;",
            [body.NOME, body.EMAIL, body.SENHA, id],
            (error)=>
            {
                if(error) {reject(`Erro ao tentar atualizar registro ${error}`)} 

                else {resolve(`Registro de usuário atualizado com sucesso!`)}
            })
        })
    }
    

    deleteRegistroUsuarios(id){
        return new Promise((resolve, reject)=>{
            this._bd.run("DELETE FROM USUARIOS WHERE ID=?",
            [id],
            (error)=>
            {
                if(error) {reject(`Erro ao tentar deletar o registro ${error}`)} 

                else {resolve(`Registro de usuário deletado com sucesso!`)}
            }
            )
        })
    }
}
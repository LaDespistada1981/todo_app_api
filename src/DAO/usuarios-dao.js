module.exports = class UsuariosDAO {

    constructor(bd){
        this._bd = bd;
    }

    listaUsr() {
        return new Promise((resolve, reject)=> {

            this._bd.all("SELECT * FROM USUARIOS;", (error, linhas)=> 
            {
                if(error) reject(`Erro ao consultar: ${error}`);

                else resolve(linhas);
            })
        })
    }


    buscarUsrPorEmail(email){
        return new Promise((resolve, reject)=> {

            this._bd.get("SELECT * FROM USUARIOS WHERE EMAIL = ?", [email], (error, linha)=>
            {
                if (error) reject(`Email não encontrado`)

                else resolve (linha);
            })
        })
    }


    insertUsr(body) {
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

    
    updateRegUsr(id, body){
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
    

    deleteRegUsr(id){
        return new Promise((resolve, reject)=>{
            this._bd.run("DELETE FROM USUARIOS WHERE ID=?",
            [id],
            (error)=>
            {
                if(error) {reject(`Erro ao tentar deletar o registro`)}

                else {resolve(`Registro de usuário deletado com sucesso!`)}
            })
        })
    }
}
module.exports = class TarefasDAO {

    constructor(bd){
        this._bd = bd;
    }


    listaTarefas() {
        return new Promise((resolve, reject)=> {

            this._bd.all("SELECT * FROM TAREFAS;", (error, linhas)=> 
            {
                if(error) reject(`Erro ao consultar: ${error}`);

                else resolve(linhas);
            })
        })
    }

    listaTarefaPorUserId(id_usuario) {
        return new Promise((resolve, reject)=> {
            
            this._bd.get("SELECT * FROM TAREFAS WHERE ID_USUARIO = ?", [id_usuario], (error, linha)=>
            {
                if(error) reject (`Erro ao consultar tarefas do usuário`)

                else resolve (linha);
            })
        })
    }


    insertTarefas(body) {
        return new Promise((resolve, reject)=> {

            this._bd.run("INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO) VALUES(?,?,?,?,?)",
            [body.TITULO, body.DESCRICAO, body.STATUS, body.DATACRIACAO, body.ID_USUARIO],
            (error)=>
            {
                if(error) {reject(`Erro ao tentar inserir ${error}`)} 

                else {resolve(`Tarefas ${body.TITULO} adicionadas com sucesso!`)}
            })
        })
    }


    updateTarefa(id, body){
        return new Promise((resolve, reject)=>{
            
            this._bd.run("UPDATE TAREFAS SET TITULO=?, DESCRICAO=?, STATUS=?, DATACRIACAO=? WHERE ID=?;",
            [body.TITULO, body.DESCRICAO, body.STATUS, body.DATACRIACAO, id],
            (error)=>
            {
                if(error) {reject(`Erro ao tentar atualizar tarefa ${error}`)} 

                else {resolve(`Tarefa atualizada com sucesso!`)}
            })
        })
    }

    
    deleteTarefa(id){
        return new Promise((resolve, reject)=>{
            this._bd.run("DELETE FROM USUARIOS WHERE ID=?",
            [id],
            (error)=>
            {
                if(error) {reject(`Erro ao tentar deletar o registro ${id}`)} 

                else {resolve(`Tarefa deletada com sucesso!`)}
            })
        })
    }
}
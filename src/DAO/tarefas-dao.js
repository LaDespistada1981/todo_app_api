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
    

    insertTarefas(body) {
        return new Promise((resolve, reject)=> {

            this._bd.run("INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO) VALUES(?,?,?,?)",
            [body.TITULO, body.DESCRICAO, body.STATUS, body.DATACRIACAO, body.ID_USUARIO],
            (error)=>
            {
                if(error) {reject(`Erro ao tentar inserir ${error}`)} 

                else {resolve(`Tarefas ${body.TITULO} adicionadas com sucesso!`)}
            })
        })
    }
}
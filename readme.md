# PROJETO M3 | PROJECT M3

# TODO APP API

A **TODO-APP-API** é uma api para gerenciamento de tarefas baseada na metodologia kanban.

Esta API foi desenvolvida ao longo do 3º módulo do curso de desenvolvimento web Full-Stack do bootcamp **Resilia** **Educação**.
<br>

#####  English
This is an api for management of tasks, based on kanban methodology.
<br>

#### 🔑 Keywords: [javascript] [nodejs] [sqlite]
<br>

##  🚀 Começando | Starting

Essas instruções permitirão que você consiga ter esse projeto em operação na sua máquina local para fins de desenvolvimento e teste.
<br>

#####  English 

These instructions will allow you running this application on your local machine for development and testing purposes.
<br>

### 📋 Pré-requisitos para instalação | Installation requirements🔧

* Instale NodeJS em seu computador.
* Baixe os aquivos deste repositório.
* Entre na pasta do repositório baixado anteriormente e instale via terminal utilizando o comando: npm install.
    Este comando irá instalar todas as dependências necessárias para que você possa utilizar a api em sua máquina.

 * Inicie a aplicação via terminal utilizando o comando: npm start.
<br>

#####  English 
* Install NodeJS.
* Download the files from this repository.
* Open the folder with TODO APP API in your terminal and insert the command => npm install.
    The app will install all necessary dependencies so you can use the api in your computer.

 * Start the application in your terminal using: npm start.
<br>

##  📦 Desenvolvimento | Developement

### 🛠️ Ambiente de construção | Building enviroment

* [NodeJS](https://nodejs.org/pt-br/docs/)
* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) 
* [Body-parser v1.19.0](https://www.npmjs.com/package/body-parser) 
* [Cors v2.8.5](https://www.npmjs.com/package/cors) 
* [Express v4.17.1](https://expressjs.com/pt-br/api.html) 
* [Node-fetch v2.6.1](https://www.npmjs.com/package/node-fetch)
* [SQLite3 v5.0.1](https://www.sqlite.org/index.html)
<br>


##  📌 Versão | Version Control

Utilizamos [GitHub](https://github.com/) para controle de versão. Para as versões disponíveis, procure em [TODO-APP-API](https://github.com/LaDespistada1981/todo_app_api).
<br>

#####  English 
We use [GitHub](https://github.com/) for version control.
For available versions, check [TODO-APP-API](https://github.com/LaDespistada1981/todo_app_api).
<br><br>

##  🟢 Rotas de Acesso | Routes

### ➡️ As rotas para teste podem ser encontradas em => TODO_APP_API/src/insomnia/insomnia.json

### ➡️ Rota de Usuarios | User Routes
    http://localhost:8080/usuarios - Rota GET para listar usuários
    http://localhost:8080/usuarios/:email - Rota GET de busca de usuário por email
    http://localhost:8080/usuarios - Rota POST para inserir usuários no banco de dados
    http://localhost:8080/usuarios/:id - Rota PUT - Altera ficha de usuário na tabela de usuários
    http://localhost:8080/usuarios/:id - Rota DELETE - Apaga um registro na tabela de usuários

### ➡️ Rota de Tarefas | Tasks Routes
    http://localhost:8080/tarefas/- Rota GET para listar tarefas de usuários
    http://localhost:8080/tarefas/:id_usuario - Rota GET de busca de tarefas por id_usuario
    http://localhost:8080/tarefas - Rota POST para inserir tarefas no banco de dados
    http://localhost:8080/tarefas/:id - Rota PUT - Altera registro na tabelas de tarefas
    http://localhost:8080/tarefas/:id - Rota DELETE - Apaga um registro na tabela de tarefas
<br>

##  ✒️ Autora | Author

<img src="./img_readme/roberta.jpg" width="100" height="100">

**Roberta Santos**
- Meus projetos | My projects - [GitHub](https://github.com/LaDespistada1981)
- Meus trabalhos | My Jobs - [LinkedIn](https://www.linkedin.com/in/santosroberta)
- Minha vida | My life - [Instagram](https://www.instagram.com/ladespistada/)
<br>
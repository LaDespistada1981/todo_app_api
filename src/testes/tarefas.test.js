const request = require('supertest');

//Testando Rotas de Tarefas
//Testando Rota GET
test('Rota GET /tarefas', async ()=>
{
    const response = await request('http://localhost:5000')
    .get('/tarefas')
    .expect(200)
})

//Testando Rota GET com parâmetro
test('Rota GET /tarefas/:id_usuario', async ()=>
{
    const response = await request('http://localhost:5000')
    .get('/tarefas/:id_usuario')
    .expect(200)
})

//Testando Rota POST
test('Rota POST /tarefas', async ()=>
{
    const response = await request('http://localhost:5000')
    .post('/tarefas')
    .expect(200)
})


//Testando Rota PUT
test('Rota GET /tarefas/:id_usuario', async ()=>
{
    const response = await request('http://localhost:5000')
    .put('/tarefas/:id_usuario')
    .expect(200)
})


//Testando Rota DELETE
test('Rota DELETE /tarefas/:id', async ()=>
{
    const response = await request('http://localhost:5000')
    .delete('/tarefas/:id')
    .expect(200)
})
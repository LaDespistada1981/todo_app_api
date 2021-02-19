const request = require('supertest');

//Testando Rotas de Usuarios
//Testando Rota GET
test('Rota GET /usuarios', async ()=>
{
    const response = await request('http://localhost:8080')
    .get('/usuarios')
    .expect(200)
})

//Testando Rota GET com parâmetro
test('Rota GET com parâmetro /usuarios/:email', async ()=>
{
    const response = await request('http://localhost:8080')
    .get('/usuarios/:email')
    .expect(200)
})


//Testando Rota POST
test('Rota POST /usuarios', async ()=>
{
    const response = await request('http://localhost:8080')
    .post('/usuarios')
    .expect(200)
})


//Testando Rota PUT
test('Rota PUT /usuarios/:id', async ()=>
{
    const response = await request('http://localhost:8080')
    .put('/usuarios/:id')
    .expect(200)
})


//Testando Rota DELETE
test('Rota DELETE /usuarios/:id', async ()=>
{
    const response = await request('http://localhost:8080')
    .delete('/usuarios/:id')
    .expect(200)
})

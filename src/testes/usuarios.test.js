const request = require('supertest')

const usrController = require('../controllers/usuarios-controller')

describe('Teste de Rotas de Usuário', ()=> {
    it('should get users route', async ()=> {
        const resposta = await request(usrController).app.get('/usuarios')

        expect(resposta.statusCode).toEqual(200)
        expect(resposta.body).toHavePropert(`${listaUsrRet}`)
    })

})
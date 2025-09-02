
 const request = require('supertest');
 const config = require('./fixtures/config.json'); //aqui eu importo o arquivo json como objeto
 const ApiUrl = config.apiUrl;
 


 const loginPayload = require('./fixtures/dadosLogin.json') 

 describe('Autenticação com o Token', () => {
    let token = '';

    it('Deve fazer o login e obter um token de autenticação', () => {
   

    return request(ApiUrl)
    .post('/auth')
    .send(loginPayload)
    .set('Content-Type', 'application/json')  //campo obrigatório no header
    .then(response => {
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
            
        token = response.body.token//armazenando o id da reserva

         console.log('O valor do seu token é: ' + token);
    })
 })
})
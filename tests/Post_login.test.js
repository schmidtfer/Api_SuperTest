
 const request = require('supertest');
 const config = require('./fixtures/config.json'); //aqui eu importo o arquivo json como objeto, objeto inteiro
 const ApiUrl = config.apiUrl; //Para acessar apenas a string da URL (que o Supertest precisa), você usa o ponto (.) para acessar a propriedade:
 


 const loginPayload = require('./fixtures/dadosLogin.json') 

 describe('Autenticação com o Token', () => {
    let token = '';

    it('Deve fazer o login com sucesso na API e obter um token de autenticação', () => {
   

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
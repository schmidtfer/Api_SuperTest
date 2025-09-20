const request = require('supertest'); //importa o supertest
const config = require('./fixtures/config.json'); //aqui eu importo o arquivo json como objeto
const ApiUrl = config.apiUrl; //Aqui ApiUrl será "https://restful-booker.herokuapp.com", transformo em string

const reservaPayload = require('./fixtures/reservaPayload.json');

describe('Deletar reserva com sucesso', () => {
    let bookingId = '';

    //pré condição: criar uma reserva (POST) para depois deletar (Delete)

    beforeEach(() => {
        return request(ApiUrl)
        .post('/booking')
        .send(reservaPayload)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .then(response => {
            bookingId = response.body.bookingid; //Atribui o valor do campo bookingid (ID da reserva criada) à variável bookingId.
              expect(typeof bookingId).toBe("number");
      });
    });

      it('Deve deletar uma reserva', () => {
          return request(ApiUrl)
          .delete(`/booking/${bookingId}`)
          .set('Content-Type', 'application/json')
          .set('Authorization', 'Basic YWRtaW46cGFzc3dvcmQxMjM=') //token em base64
          .then(response => {
            expect(response.status).toBe(201);
        
          console.log ('A reserva de ID ' + bookingId + ' foi deletada com sucesso.');  
          });
      });
});
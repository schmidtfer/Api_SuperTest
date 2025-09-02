
const request = require('supertest');
const config = require('./fixtures/config.json'); //aqui eu importo o arquivo json como objeto
const ApiUrl = config.apiUrl;// Aqui ApiUrl será "https://restful-booker.herokuapp.com", transformo em string

const payload = require('./fixtures/dataPostReserva.json')

describe('Criando uma reserva', () => {
    let bookingId = '';

    it('Deve criar uma nova reserva e obter o ID (POST)', () => {
        return request(ApiUrl)
            .post("/booking")
            .send(payload) // Usa a const declarada lá em cima
            .set('Content-Type', 'application/json')  //campo obrigatório no header
            .set('Accept', 'application/json')
            .then(response => {
                expect(response.status).toBe(200);
                expect(response.body).toHaveProperty('bookingid');
                expect(response.body.booking).toMatchObject(payload);

                bookingId = response.body.bookingid;


                console.log('O valor do seu bookingId é: ' + bookingId);
            });
    });
    it('Deve retornar 404 ao tentar criar reserva em rota inexistente', () => {
        return request(ApiUrl)
            .post("/booking_invalido")
            .send(payload)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .expect(404);
    });

    it('Deve retornar 500 ao tentar criar reserva sem dados obrigatórios', () => {
        return request(ApiUrl)
            .post("/booking")
            .send({}) // payload vazio
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .expect(500); // ou o status que a API retorna para forbidden
    });
});
const request = require('supertest');
const config = require('./fixtures/config.json'); //aqui eu importo o arquivo json como objeto
const ApiUrl = config.apiUrl;


describe("Buscando as reserva", () => {

       it('Deve retornar todas as reservas', () => {
              return request(ApiUrl)
                     .get("/booking/")
                     .expect(200)
                     .then(response => {
                            expect(Array.isArray(response.body)).toBeTruthy()  // verifica se é um array, se não for o teste falha
                            expect(response.body.length).toBeGreaterThan(0)  // ser melhor que//verifica se o array tem pelo menos 1 item, se não tiver o teste falha
                            expect(response.body[0]).toHaveProperty('bookingid') //Verifica se o primeiro item do array tem a propriedade 'bookingid'.
                                                                              //Se não tiver, o teste falha.

                            console.log('Minhas reservas são: ', response.body);
                     });
       });

       it('Deve retornar 404 ao buscar uma rota inexistente', () => {
              return request(ApiUrl)
                     .get("/booking_invalido/")
                     .set('Accept', 'application/json')
                     .expect(404);
       });
})
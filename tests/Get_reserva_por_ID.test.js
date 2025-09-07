//o jest vai rodar o superTeste, vai executar o teste.
//  o teste vai ser desenvolvido em supertest

const request = require("supertest");
const config = require("./fixtures/config.json");
const ApiUrl = config.apiUrl; //Ao usar const ApiUrl = config.apiUrl;, você está acessando apenas o valor da propriedade apiUrl,
// que é uma string (por exemplo, "https://restful-booker.herokuapp.com").

const reservaPayload = require("./fixtures/reservaPayload.json");

describe("Reserva de Quartos", () => {
  let bookingId = "";  //variável global para armazenar o ID da reserva criada no beforeAll

  beforeAll(() => {             //primeiro preciso fazer uma reserva (POST) para depois buscar por ID
    return request(ApiUrl)
      .post("/booking")
      .send(reservaPayload)
      .set("Accept", "application/json")
      .then((response) => {
        bookingId = response.body.bookingid; //Atribui o valor do campo bookingid (ID da reserva criada) à variável bookingId.
        expect(typeof bookingId).toBe("number");
      });
  });

  it("Deve retornar as reservas, um GET, buscando por ID", () => {
    return request(ApiUrl)
      .get(`/booking/${bookingId}`)
      .expect(200)
      .set("Accept", "application/json") //campo obrigatório no header
      .then((response) => {
        expect(bookingId).toBeDefined();
        expect(response.status).toBe(200);
        expect(response.body).toMatchObject(reservaPayload);
        expect(response.body).toHaveProperty("bookingdates");
        expect(response.body.bookingdates).toHaveProperty("checkin");
        expect(response.body.bookingdates).toHaveProperty("checkout");
        expect(response.body.firstname).toEqual("Fumaça");
        expect(response.body.lastname).toEqual("Flor");
        expect(response.body.totalprice).toEqual(175);
        expect(response.body.depositpaid).toBeTruthy();

        console.log("O valor do seu bookingId é: " + bookingId);
      });
  });

  it("Deve retornar 404 para bookingId inexistente", () => {
    return request(ApiUrl)
      .get(`/booking/99999999`)
      .set("Accept", "application/json")
      .expect(404);
  });
});

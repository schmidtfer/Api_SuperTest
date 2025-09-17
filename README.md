## Projeto SUPERTEST COM JEST
//o jest vai rodar o superTeste ->executar o teste.
//  o teste vai ser desenvolvido em supertest

## Comando para rodar todos os teste:
npm test

## Comando para rodar um teste específico:
jest --testNamePattern="Autenticação com o Token"

## Relatório HTML
npm install --save-dev jest-html-reporter     
// package.json
 "jest": {
    "reporters": [
      "default",
      "jest-html-reporter"
    ]
  }

## O beforeAll é um hook executa uma função antes de todos os testes de um bloco describe.
## Evita repetição: Você cria dados uma única vez para todos os testes do bloco.
//Garante dados válidos: Por exemplo, cria uma reserva antes de testar o GET (cria o POST), garantindo que o bookingId existe.
Deixa o teste mais limpo: O teste foca só na validação, não na preparação dos dados.

## beforeEach é executado antes de cada it (teste individual) dentro do bloco describe.
## beforeAll é executado uma única vez antes de todos os testes (it) do bloco describe.
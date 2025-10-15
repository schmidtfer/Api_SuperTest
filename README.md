# Projeto de Automação de Testes de API REST, simulando reserva de Hotel utilizando Node.js, Jest e SuperTest:

🔹Validei manualmente todos os endpoints no Postman antes da automação.

🔹 Estruturei fixtures (JSON) para centralizar dados de login e payloads de reservas, garantindo manutenção facilitada.

🔹Alguns exemplos de testes que implementei: testes de criação de reservas e login, busca de reservas por ID específico e todas as reservas, deletar reservas, além de validações de cenários negativos como reserva não encontrada - (POST, GET, DELETE).
 
🔹Utilização de hooks (beforeEach e beforeAll) para preparar o ambiente de teste, assegurando consistência e isolamento entre os cenários.

🔹Configuração de Readme, versionamento no GitHub.

🔹Execução dos testes diretamente no terminal, com relatórios em HTML para análise.

🔑 Tecnologias: Node.js | Jest | SuperTest | Postman | GitHub | Fixtures (JSON) | Hooks (beforeEach, befofeAll)

# Instalação:
  npm init -y
  npm install jest supertest --save-dev
  No script insera: {
    "test": "jest"
  }

## Comando para rodar todos os teste:
npm test  //Jest vai rodar o Supertest

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
  Evita repetição: Você cria dados uma única vez para todos os testes do bloco.
  Garante dados válidos: Por exemplo, cria uma reserva antes de testar o GET (cria o POST), garantindo que o bookingId existe.
  Deixa o teste mais limpo: O teste foca só na validação, não na preparação dos dados.

## beforeEach é executado antes de cada it (teste individual) dentro do bloco describe.
## beforeAll é executado uma única vez antes de todos os testes (it) do bloco describe.
Feature: Busca de um Produto

Scenario: Realizar a busca de um produto usando uma API GET
When usuário realizar uma requisição GET para pesquisar um produto
Then a resposta deve ter status e ID fixos

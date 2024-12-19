## OnlineShopping

Este é um repositório que contém a automação dos testes técnicos para a Keego. Este projeto contém automações de testes para a aplicação Advantage Online Shopping, utilizando Cypress como framework de teste, Yarn como gerenciador de pacotes e Cucumber para a estrutura de teste BDD (Behavior-Driven Development).

### Tecnologias utilizadas
- Java/Java Script
- NodeJs.
- Yarn
- Cypress-cucumber-preprocessor

### Testes Funcionais
Os testes funcionais estão localizados na raiz com o nome "teste_funcional_web_BDD"

### Testes do Postman
Não sabia muito bem como enviar os testes de Postman, então criei uma pasta Postman na raiz e criei arquivos .txt com os CURl's de cada API, os dados inseridos são novos ou que foram usados para testar, é só importar o CURL para o postman e rodar.

### Instalação
Para configurar o projeto localmente, siga as instruções abaixo: 
1. Clone o repositório usando o git bash:
 git clone https://github.com/JussaraSGomes/OnlineShopping
2. Acesse o diretório:
	cypress/e2e/step_definitions
3. Instale as dependências:
	yarn install
4. Para rodar os testes, execute o comando, abrirá a interface do Cypress, onde você pode selecionar e executar os testes.
	yarn cypress open

### Automação de API
Queria deixar uma observação, para a API de update de imagem, tanto pelo postman quando pelo cypress, a API retornou 500. A automação montei bem parecido com a automação que fiz na outra empresa. Mas ainda fiquei com dúvida em um ponto.

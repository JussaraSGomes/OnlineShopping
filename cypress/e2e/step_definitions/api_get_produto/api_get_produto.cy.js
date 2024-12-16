import { When, Then, And } from 'cypress-cucumber-preprocessor/steps'

let response;

When ('usuário realizar uma requisição GET para pesquisar um produto', ()=> {
    const productId = 14;
    const expectedStatus = 200;

    cy.request({
        method: 'GET',
        url: `https://www.advantageonlineshopping.com/catalog/api/v1/products/${productId}`
        }).then((res) =>{
            response = res;

            expect(response.status).to.eq(expectedStatus);
    
            cy.log('Body da Resposta:', JSON.stringify(response.body, null, 2));
        })
    
})

Then("a resposta deve ter status e ID fixos", () => {
    const expectedId = 14; // ID fixo esperado
  
    expect(response.body).to.have.property('productId', expectedId);
  });



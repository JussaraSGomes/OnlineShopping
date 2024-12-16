<reference types="cypress" />

describe('busca', ()=> {

    it('realizar busca de produto via API', ()=> {
const productId = 14; //Path Variable

        cy.request({
            method: 'GET',
            url: `https://www.advantageonlineshopping.com/catalog/api/v1/products/${productId}`
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('id', productId)
        })
    })
})
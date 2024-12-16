import { Given, When, Then, And, Before } from 'cypress-cucumber-preprocessor/steps'
beforeEach(()=> {
    cy.viewport(1440, 900)
})

Given ('usuário tenha acessado o site e realizado o login', ()=> {
    cy.acessar_site()
    cy.login('Teste1', 'Teste1234')
})

And ('realiza a busca de um produto', ()=> {
    cy.pesquisa_produto("Mouse")
})

When ('usuário clica sobre a imagem do produto', ()=> {
    cy.get('[data-ng-show="([] | productsFilterForCategoriesProduct:searchResult:minPriceToFilter:maxPriceToFilter:productsInclude).length != 0"] > ul > :nth-child(1)')
    .click()
})

And ('Site apresenta uma pagina detalhada sobre o produto', ()=> {
    cy.get('.select').should('have.text', "HP Z3600 WIRELESS MOUSE")
})

And ('usuário seleciona a cor', ()=> {
    cy.get('.BLUE').click()
})

And ('usuário informa a quantidade que será comprada', ()=>{
    cy.get(':nth-child(2) > .ng-pristine').type("2")
})

And ('clica no botão Add To Cart', ()=> {
    cy.get('button.roboto-medium.ng-scope').click()
})

Then ('site deve apresentar um pop-up informando que o produto está no carrinho', ()=> {
    cy.get('[colspan="2"] > .roboto-medium').should('be.visible')
})


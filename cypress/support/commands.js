// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('preencher_login', (username, password)=> {
    cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type(username)
    cy.get('[a-hint="Password"] > .inputContainer > .ng-pristine').type(password) 
})

Cypress.Commands.add('login', (username, password)=> {
    cy.get('#menuUser').click()
    cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type(username)
    cy.get('[a-hint="Password"] > .inputContainer > .ng-pristine').type(password) 
    cy.get('#sign_in_btn').click()
})

Cypress.Commands.add('acessar_site',()=> {
    cy.visit("https://advantageonlineshopping.com/")
    cy.get('div.logo').should('be.visible')
})

Cypress.Commands.add('pesquisa_produto',(produto)=> {
    cy.get('#searchSection').click()
    cy.get('#autoComplete').type(produto)
    cy.get('.viewAll').click()
    cy.get('div[data-ng-click="closeSearchForce()"]').click()
    cy.get('#searchResultLabel').should('be.visible')  
})

Cypress.Commands.add('incluir_carrinho', ()=> {
    cy.get('[data-ng-show="([] | productsFilterForCategoriesProduct:searchResult:minPriceToFilter:maxPriceToFilter:productsInclude).length != 0"] > ul > :nth-child(1)')
    .click()
    cy.get('button.roboto-medium.ng-scope').click()
})
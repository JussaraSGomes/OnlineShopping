import { Given, When, Then, And, Before } from 'cypress-cucumber-preprocessor/steps'
beforeEach(()=> {
    cy.viewport(1440, 900)
})

Given ('usuário tenha acessado o site e realizado o login', ()=> {
    cy.acessar_site()
    cy.login('Teste1', 'Teste1234')
})

When ('usuário clica no botão de Busca', ()=> {
    cy.get('#searchSection').click()
})

And ('Site apresenta um campo de pesquisa', ()=> {
    cy.get('#autoComplete').should('be.visible')
})

And ('usuário informa o produto a ser pesquisado', ()=> {
    cy.get('#autoComplete').type('Mouse')
})

And ('site apresenta um pop-up com o resultado da pesquisa', ()=> {
    cy.get('h3.roboto-medium.ng-binding')
})

And ('usuário clica no link View All', ()=> {
    cy.get('.viewAll').click()
})

Then ('Site deve apresentar uma página completa com o resultado da pesquisa', ()=> {
    cy.get('div[data-ng-click="closeSearchForce()"]').click()
    cy.get('#searchResultLabel').should('be.visible')
})


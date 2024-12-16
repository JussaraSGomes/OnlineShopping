import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

Given("usuário acessa o link do Shopping Online", () => {
    cy.visit("https://advantageonlineshopping.com/")
})

And ("site é carregado corretamente", () =>{
    cy.get('div.logo').should('be.visible')
})

When ("usuário clica no botão 'User'", () =>{
    cy.get('#menuUser').click()
})

And ("preenche os campos  com dados já cadastrados", () =>{
    cy.preencher_login('Teste1', 'Teste1234')
})

And ("botão 'SIGN IN' deve ser habilitado", () =>{
    cy.get('#sign_in_btn').should('be.visible').and('not.be.disabled')
})

Then ("usuário deve clicar no botão 'SIGN IN'", () =>{
    cy.get('#sign_in_btn').click()
})

And ("apresentar o nome cadastrado ao lado do botão 'User'", () =>{
    cy.get('span.hi-user.containMiniTitle.ng-binding')
    .should('be.visible')
})


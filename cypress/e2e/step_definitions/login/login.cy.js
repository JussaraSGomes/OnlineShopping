import Login from '../../../support/pagesobjects/login'
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

Given("usuário acessa o link do Shopping Online", () => {
    Login.visitarPagina()
})

And ("site é carregado corretamente", () =>{
    Login.verificarHome()
})

When ("usuário clica no botão 'User'", () =>{
    Login.clickMenuUser()
})

And ("preenche os campos  com dados já cadastrados", () =>{
    Login.preencherLogin()
})

And ("botão 'SIGN IN' deve ser habilitado", () =>{
    cy.get('#sign_in_btn').should('be.visible').and('not.be.disabled')
})

Then ("usuário deve clicar no botão 'SIGN IN'", () =>{
    Login.confirmarLogin()
})

And ("apresentar o nome cadastrado ao lado do botão 'User'", () =>{
    Login.confirmarUsuario()
})


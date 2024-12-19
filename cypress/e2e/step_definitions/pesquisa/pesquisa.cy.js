import Login from '../../../support/pagesobjects/login.js'
import Menu from '../../../support/pagesobjects/menu.js'
import Produto from '../../../support/pagesobjects/products.js'
import Cart from '../../../support/pagesobjects/cart.js'

import { Given, When, Then, And, Before } from 'cypress-cucumber-preprocessor/steps'
beforeEach(()=> {
    cy.viewport(1440, 900)
})

Given ('usuário tenha acessado o site e realizado o login', ()=> {
    Login.loginCompleto()
})

When ('usuário clica no botão de Busca', ()=> {
    Menu.acessaPesquisa()
})

And ('Site apresenta um campo de pesquisa', ()=> {
    Menu.acessaPesquisa()
})

And ('usuário informa o produto a ser pesquisado', ()=> {
    Produto.pesquisaProduto()
})

And ('site apresenta um pop-up com o resultado da pesquisa', ()=> {
    Produto.retornoPesquisa()
})

And ('usuário clica no link View All', ()=> {
    Produto.visualizarTudo()
})

Then ('Site deve apresentar uma página completa com o resultado da pesquisa', ()=> {
    Produto.fecharPopUp()
})


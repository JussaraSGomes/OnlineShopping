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

And ('realiza a busca de um produto Tablet', ()=> {
    Produto.pesqCompleta()
})

When ('usuário clica no produto escolhido', ()=> {
    Produto.clickProduto()
})

And ('apresenta a pagina detalhada sobre o produto', ()=> {
    Produto.detalhadoProduct()
})

And ('seleciona a cor do produto', ()=> {
    Produto.selecaoCor()
})

And ('informa a quantidade que será comprada', ()=>{
    Produto.incluirQtd()
})

And ('clica no botão Add To Cart', ()=> {
    Produto.clicarBotao()
})

Then ('site deve apresentar um pop-up informando que o produto está no carrinho', ()=> {
    Produto.prodAdicionado()

})


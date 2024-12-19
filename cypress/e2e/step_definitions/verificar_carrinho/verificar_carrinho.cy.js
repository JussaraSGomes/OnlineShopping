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

And ('tenha produtos adicionados no carrinho', ()=> {
    Menu.menuProduto()
    Produto.selecaoProdutoMenu()
})

When ('usuário clica na imagem do Carrinho de compras', ()=> {
    Cart.botaoCart()
})

And ('Site direciona o usuário para a página Shopping Cart', ()=> {
    Cart.paginaCart()
})

And ('Confirmar que as informações do pedido estão corretas', ()=> {
    Cart.confirmADDCart()
})

And ('clica no botão Checkout', ()=> {
    cy.get('#checkOutButton').click()
})

Then ('site deve direcionar o usuário para a página Order Payment', ()=> {
    Cart.siteOrderPay()
})

And ('apresentar o Order Summary com as informações do pedido', ()=> {
    Cart.confirmOderSummary()
})


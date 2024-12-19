import { cart_elements as Cart_el, cart_elements } from "../locators/cart_elements";

class Cart {
    botaoCart() {
        cy.get(Cart_el.botaoCart).click()
    }

    paginaCart() {
        cy.url().should('eq', 'https://advantageonlineshopping.com/#/shoppingCart')
        cy.get(Cart_el.tituloCart).contains('SHOPPING CART')
    }

    confirProdutoCart() {
        cy.contains(Cart_el.cartNomeProduto, Cypress.env('productName'))
        cy.get(Cart_el.cartColorProd)
            .should('have.attr', 'title', Cypress.env('productColor'))
        cy.contains(Cart_el.cartQTDProd, Cypress.env('productQuantity'))
    }

    confirmADDCart(){
        cy.contains(Cart_el.cartNomeProduto, Cypress.env('productName'))
        cy.get(Cart_el.cartColorProd)
            .should('have.attr', 'title', Cypress.env('productColor'))
    }

    siteOrderPay(){
        cy.url().should('eq', 'https://advantageonlineshopping.com/#/orderPayment')
    }

    confirmOderSummary(){
        cy.get('#userCart').contains(' ORDER SUMMARY')
        cy.contains(Cart_el.tituloCart, Cypress.env('productName'))
        cy.contains(Cart_el.boxOrderSummaryColor, Cypress.env('productColor'))
    }
}

export default new Cart()

import{ login_elements as login_el} from "../locators/login_elements.js"

class Login {

    visitarPagina() {
        cy.visit("https://advantageonlineshopping.com/") 
    }
    verificarHome(){
        cy.get('div.logo').should('be.visible')
    }
    loginCompleto(){
        cy.visit("https://advantageonlineshopping.com/")
        cy.get(login_el.logoHome).should('be.visible')
        cy.get(login_el.menuUser).click()
        cy.get(login_el.username).type('Teste1')
        cy.get(login_el.password).type('Teste1234') 
        cy.get(login_el.loginButton).click()
    }

    clickMenuUser(){
        cy.get(login_el.menuUser).click()
    }

    preencherLogin() {
        cy.get(login_el.username).type('Teste1')
        cy.get(login_el.password).type('Teste1234') 
    }

    confirmarLogin(){
        cy.get(login_el.loginButton).click()
    }

    confirmarUsuario() {
        cy.get(login_el.menuUserLogin).should('be.visible'),
        cy.contains('Teste1')
    }

}

export default new Login()
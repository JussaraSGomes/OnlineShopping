import { products_elements as product_el } from "../locators/products_elements";

class Produto {
    pesquisaProduto() {
        cy.get(product_el.CampoPesquisa).type('Mouse')
    }

    retornoPesquisa(){
        cy.get(product_el.resultPopup).should('be.visible')
    }

    pesqCompleta(){
        cy.get(product_el.BotaoPesquisa).click()
        cy.get(product_el.CampoPesquisa).type("Tablet")
        cy.get(product_el.viewAll).click()
        cy.get(product_el.popupFechar).click()
        cy.get(product_el.pesquisaResultado).should('be.visible') 
        cy.url().should('eq', 'https://advantageonlineshopping.com/#/search/?viewAll=Tablet')
    }

    visualizarTudo(){
        cy.get(product_el.viewAll).click()
    }

    fecharPopUp(){
        cy.get(product_el.popupFechar).click()
        cy.get(product_el.pesquisaResultado).should('be.visible')
    }
    
    clickProduto(){
        cy.contains('a', 'HP ElitePad 1000 G2 Tablet').click()
    }

    detalhadoProduct(){
        cy.contains('HP ElitePad 1000 G2 Tablet').should('be.visible')
        cy.url().should('eq', 'https://advantageonlineshopping.com/#/product/16?viewAll=Tablet')
    }

    selecaoCor(){
        cy.get(product_el.selectCorGray).click()  
    }

    incluirQtd(){
        cy.get(product_el.incluirQtd).type("2")
    }

    clicarBotao(){
        cy.get(product_el.botaoAddCart).click()
    }

    prodAdicionado(){
        cy.get(product_el.popupAddProdCart).should('have.class', 'lastProduct')
        cy.get(product_el.popupNomeProd).contains('HP ELITEPAD 1000 G2 TABLET')
    }

    selecaoProdutoMenu(){
        cy.contains('a', 'HP Roar Mini Wireless Speaker').click()
        cy.get(product_el.selectProduto).contains('HP ROAR MINI WIRELESS SPEAKER').then((element) => {
            const productName = element.text().trim()
            Cypress.env('productName', productName);//armazena nome produto
        });
        cy.get(product_el.selectCorYellow).click().then(()=> {
            Cypress.env('productColor', 'YELLOW') //armazena a cor 
        })
        cy.get(product_el.incluirQtd).type("1").then(()=> {
            Cypress.env('productQuantity', '1') //armazena quantidade
        })
        cy.get(product_el.botaoAddCart).click()
    }
}

export default new Produto()
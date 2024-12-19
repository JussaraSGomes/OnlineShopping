import { menu_elements as Menu_el } from "../locators/menu_elements";

class Menu{
    acessaPesquisa() {
        cy.get(Menu_el.Pesquisar).click()
    }

    confCampoPesq() {
        cy.get(Menu_el.CampoPesquisa)
    }

    menuProduto() {
        cy.get(Menu_el.menuSpeaker).click()
        cy.url().should('eq','https://advantageonlineshopping.com/#/category/Speakers/4')
    }
}

    export default new Menu()
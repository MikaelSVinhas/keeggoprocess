import homeElements from '../elements/homeElements'
const el = new homeElements

const url = Cypress.config("baseUrl")

class homePage {
    visitSite() {
        cy.visit(url)
        cy.intercept('/api/carrinho/**').as('loadPage')
        cy.wait('@loadPage')
    }

    accessProduct(productName) {
        cy.get(el.divProductName())
            .contains(productName)
            .should('be.visible')
            .click()
        cy.wait('@loadPage')
    }

    addCart(productName) {
        cy.get(el.cardProduct())
            .contains(productName)
            .parents(el.cardProduct())
            .find(el.btnAddCart())
            .click()
    }

}
export default homePage
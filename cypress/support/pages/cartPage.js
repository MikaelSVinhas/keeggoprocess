import cartElements from '../elements/cartElements'
const el = new cartElements

const url = Cypress.config("baseUrl")

class cartPage {
    cleanCart() {
        cy.request({
            method: 'DELETE',
            url: url + '/api/carrinho/1',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200)
        });
    }

    checkCartQtt(qtd) {
        cy.get(el.btnAddCart()).click()
        cy.get(el.accountantCart())
            .should('have.text', qtd)
    }

    openCart() {
        cy.get(el.itemNavBar())
            .contains('CARRINHO')
            .click()
    }

    checkProduct(productName) {
        cy.get(el.divProductName())
            .contains(productName)
            .should('be.visible')
    }

    proceedCheckout() {
        cy.contains('Ir para o Checkout').click()
    }
}

export default cartPage;
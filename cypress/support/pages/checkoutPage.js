import checkoutElements from '../elements/checkoutElements'
const el = new checkoutElements

import { faker } from '@faker-js/faker'

class checkoutPage {
    fillDeliveryDetails() {
        cy.get(el.iptFirstName()).type(faker.person.firstName())
        cy.get(el.iptLastName()).type(faker.person.lastName())
        cy.get(el.iptAddress()).type(faker.location.street())
        cy.get(el.iptNumber()).type(faker.number.int(1000))
        cy.get(el.iptZipCode()).type(faker.location.zipCode('########'))
        cy.get(el.iptPhone()).type(faker.phone.number({ style: 'international' }))
        cy.get(el.iptEmail()).type(faker.internet.email())
    }

    selectPaymntMethod(mtdPayment) {
        cy.contains(el.lblPaymentMethod(), mtdPayment)
            .prev(el.chkPaymentMethod())
            .check()
    }

    acceptTerms() {
        cy.get(el.chkTerms()).check()
    }

    finishOrder() {
        cy.contains('Finalizar Pedido').click()
    }

    checkRequiredFields() {
        cy.get(el.lblRequired()).should('have.text', 'Por favor, preencha todos os campos obrigatório marcados com asteriscos!')

        const requiredFields = [
            'first-name',
            'last-name',
            'address',
            'number',
            'cep',
            'email',
            'terms',
        ]

        requiredFields.forEach(fields => {
            cy.get(`#${fields}`).should('have.class', 'is-invalid')
            cy.get(`#${fields}`)
                .siblings('.invalid-feedback')
                .should('be.visible')  
                .and('contain', 'Este campo é obrigatório.')
        })
    }

    checkOrderNumber(orderNumber) {
        cy.contains(el.divOrderNumber(), orderNumber)
    }

    checkTotalPrice(totalPrice){
        cy.contains(el.divOrderNumber(), totalPrice)
    }
}

export default checkoutPage;
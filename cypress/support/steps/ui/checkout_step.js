/* global Given, Then, When */
import CartPage from '../../pages/cartPage'
const cartPage = new CartPage

import HomePage from '../../pages/homePage'
const homePage = new HomePage

import CheckoutPage from '../../pages/checkoutPage'
const checkoutPage = new CheckoutPage

let responseData

Given('que o usuário adicione um produto ao carrinho', () => {
    homePage.visitSite()
    homePage.addCart('Ecobag')
})

Given('acessar o carrinho e avançar o checkout', () => {
    cartPage.openCart()
    cartPage.proceedCheckout()
})


When('preencher os campos obrigatórios e selecionar o metodo de pagamento {string}', (paymentMethod) => {
    cartPage.openCart()
    cartPage.proceedCheckout()
    checkoutPage.fillDeliveryDetails()
    checkoutPage.selectPaymntMethod(paymentMethod)
    checkoutPage.acceptTerms()
})

When('clicar em Finalizar Pedido', () => {
    checkoutPage.finishOrder()
})

Then('o pedido é finalizado e o usuário é redirecionado para página de sucesso', () => {
    cy.intercept('GET', '**/api/orders/**').as('getOrder')

    cy.wait('@getOrder').then((interception) => {
        // Salva a resposta da requisição
        responseData = interception.response.body;
        cy.log('Número da ordem:' + responseData.formattedOrderId)
        checkoutPage.checkOrderNumber(responseData.formattedOrderId)
        checkoutPage.checkTotalPrice(responseData.total_price)
    });
})

Then('devo ver a mensagem de erro e indicativo dos campos obrigatórios', () => {
    checkoutPage.checkRequiredFields()
})
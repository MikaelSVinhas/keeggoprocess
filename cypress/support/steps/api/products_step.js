/* global Given, Then, When */

var productId = Cypress.env('productInfo').productId
var incorrectId = 1256354
var productName = Cypress.env('productInfo').productName
var description = Cypress.env('productInfo').description
var price = Cypress.env('productInfo').price
var imageUrl = Cypress.env('productInfo').imageUrl

Given('que eu faça uma requisição GET para o endpoint de produtos com o id {string}', (id) => {
    var product = id
    cy.getProductById(product)
        .as('productRequest')
})

Then('a resposta deve ter o status code {string}', (status) => {
    var statusCode = Number(status)
    cy.get('@productRequest').its('status').should('eq', statusCode)
})

Then('as informações do produto, devem estar de acordo', () => {
    cy.get('@productRequest').its('body.id').should('equal', productId);
    cy.get('@productRequest').its('body.name').should('equal', productName);
    cy.get('@productRequest').its('body.description').should('equal', description);
    cy.get('@productRequest').its('body.price').should('equal', price);
    cy.get('@productRequest').its('body.image').should('equal', imageUrl);
})

Then('valido a mensagem de erro retornada', () => {
    cy.get('@productRequest').its('body.message').should('eq', "Produto não encontrado.")
})
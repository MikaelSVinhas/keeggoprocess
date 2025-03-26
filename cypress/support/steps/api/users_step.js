/* global Given, Then, When */

import { faker } from '@faker-js/faker'

const userName = faker.name.firstName()
const email = faker.internet.email()
const password = faker.internet.password()

Given('que eu faça uma requisição POST para o endpoint de usuários', () => {
    cy.postUsers(userName, email, password, true)
        .as('userRequest')
})

Then('a resposta deve ter o status code 201', () => {
    cy.get('@userRequest').its('status').should('eq', 201)
})

Then('a mensagem de sucesso deve ser exibida juntamente com o id', () => {
    cy.get('@userRequest').its('body.message').should('equal', 'Usuário criado com sucesso.')
    cy.get('@userRequest').its('body.id').should('not.be.null')
})
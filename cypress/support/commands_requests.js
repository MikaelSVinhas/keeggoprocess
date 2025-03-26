var URL_API = Cypress.config("baseUrl")

Cypress.Commands.add('getProductById', (productId) => {
    cy.request({
        method: "GET",
        url: `${URL_API}/api/produtos/${productId}`,
        headers: {
            accept: "application/json",
        },
        failOnStatusCode: false
    })
})

Cypress.Commands.add('postUsers', (name, email, password, isAdmin) => {
    cy.request({
        method: "POST",
        url: `${URL_API}/api/users`,
        headers: {
            accept: "application/json",
        },
        body: {
            "name": name,
            "email": email,
            "password": password,
            "isAdmin": isAdmin
        },
        failOnStatusCode: false
    })
})
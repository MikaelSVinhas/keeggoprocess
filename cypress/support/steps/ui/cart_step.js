/* global Given, Then, When */

import CartPage from '../../pages/cartPage.js'
const cartPage = new CartPage

import HomePage from '../../pages/homePage.js'
const homePage = new HomePage

import ProductPage from '../../pages/productPage.js'
const productPage = new ProductPage

Given('que o usuário está na home page do e-commerce', () => {
   homePage.visitSite()
})

Given("acessa a página do produto {string}", (productName) => {
   homePage.accessProduct(productName)
})

When("o usuário inserir a quantidade {string} no campo de input e clicar em adicionar ao carrinho", (qtt) => {
   productPage.insertIpt(qtt)
   cartPage.checkCartQtt(qtt)
})

When("clicar em adicionar ao carrinho do produto {string}", (productName) => {
   homePage.addCart(productName)
})

Then("ao acessar o carrinho o produto {string} é exibido", (productName) => {
   cartPage.openCart()
   cartPage.checkProduct(productName)
   cartPage.cleanCart()
})
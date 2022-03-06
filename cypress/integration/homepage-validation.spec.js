/// <reference types="cypress" />

import {LoginPage, homePage} from '../pages/index'
import {product} from '../utils/test_data.js'

describe('Add to Cart',() => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#nav-link-accountList')
        .contains('Hello, Sign in')
        .should('be.visible')
        .click()
      LoginPage.loginWith(Cypress.env('Email'), Cypress.env('Pwd'))
      cy.get('.nav-cart-icon').click({force:true})
      homePage.removeItemsFromCart(product.name)
    })

    afterEach(() => {
        homePage.removeItemsFromCart(product.name)
    })

    it('Search Products and add to cart',() => {
        homePage.searchProduct(product.name)
        homePage.addToCart(product.quantity)
        homePage.addedCartContains(product.name, product.quantity)
    })


})

describe('Remove from Cart',() => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#nav-link-accountList')
        .contains('Hello, Sign in')
        .should('be.visible')
        .click()
      LoginPage.loginWith(Cypress.env('Email'), Cypress.env('Pwd'))
      homePage.searchProduct(product.name)
      homePage.addToCart(product.quantity)
    })

    afterEach(() => {
        homePage.removeItemsFromCart(product.name)
    })

    it('Remove items from cart',() => {
        homePage.removeItemsFromCart(product.name)
        homePage.checkIfCartIsEmpty()
    })
})

   
   


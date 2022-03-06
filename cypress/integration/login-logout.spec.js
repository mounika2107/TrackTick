/// <reference types="cypress" />

import {LoginPage, homePage} from '../pages/index'

const SignOut = '#nav-item-signout'
const Account = '#nav-link-accountList'

describe('Login Validation', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.clearCookies()
  })

  afterEach(() => {
    cy.clearCookies()
  })

    it('Login with valid credentials', () => {
      cy.get(Account)
        .contains('Hello, Sign in')
        .should('be.visible')
        .click()
      LoginPage.loginWith(Cypress.env('Email'), Cypress.env('Pwd'))
      homePage.validateUser(Cypress.env('user'))
      homePage.printUser()
    })

  })

    describe('Signout from application',() => {
      beforeEach(() => {
          cy.visit('/')
          cy.get(Account)
          .contains('Hello, Sign in')
          .should('be.visible')
          .click()
        LoginPage.loginWith(Cypress.env('Email'), Cypress.env('Pwd'))
        
      })
  it('SignOut',() => {
      homePage.logOut()
  })

})



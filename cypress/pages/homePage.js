/// <reference types="Cypress" />

const Account = '#nav-link-accountList'
const SEARCH = '#twotabsearchtextbox'
const ADDTOCART = '#add-to-cart-button'
const QUANTITY = '#quantity'
const SIGNOUT = '#nav-item-signout'


export default class homePage {
  static validateUser(user) {
    cy.get(Account)
        .should(($el) => expect($el).to.contain(`Hello, ${user}`))
  
      }

    static printUser() {
      cy.get('#nav-link-accountList-nav-line-1')
        .invoke('text')
        .then((text)=> console.log(text))

    }

    static addedCartContains(item,qty) {
      cy.get('.nav-cart-icon').click({force:true})
      cy.get('.a-unordered-list.a-nostyle.a-vertical.a-spacing-mini.sc-info-block')
        .contains(item)
        .should('be.visible')
      cy.get('.a-dropdown-prompt')
        .contains(qty)
        .should('be.visible')
    }

    static searchProduct(item) {
      cy.get(SEARCH).type(`${item}{enter}`)
      cy.get('.sg-col-inner > .s-widget-container > .s-card-container')
      .contains(item)
      .click({force:true})
    }

    static addToCart(qty) {
      cy.get(QUANTITY).select(qty, {force:true})
      cy.get(ADDTOCART).click()
      cy.reload()
    }

    static removeItemsFromCart(item) {
      cy.get('.nav-cart-icon').click({force:true})
      cy.wait(2000)
      cy.get('.sc-cart-header > .a-row > h1')
        .invoke('text')
        .then((text) => {
          if(!text.includes('empty.')) {
            cy.get('.a-unordered-list.a-nostyle.a-vertical.a-spacing-mini.sc-info-block')
              .contains(item)
              .parentsUntil('.a-row.sc-list-item.sc-list-item-border.sc-java-remote-feature')
              .within(() => {
                cy.get('input[value="Delete"]').click()
              })
          }
          else {
            cy.log('Cart is already Empty')
          }
        })


    }

    static checkIfCartIsEmpty() {
      cy.get('.nav-cart-icon').click({force:true})
      cy.get('.sc-cart-header > .a-row > h1')
        .invoke('text')
        .then((text) => { 
          expect(text).to.include('empty.')
        })
    }

    static logOut() {
      cy.get(Account).invoke('show')        
      cy.get(SIGNOUT).click({force:true})
      cy.get('.a-padding-extra-large > .a-spacing-small').should('be.visible')

    }
    
}

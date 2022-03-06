/// <reference types="Cypress" />


const EMAIL_INPUT = '#ap_email';
const PASSWORD_INPUT = '#ap_password';
const LOGIN_BUTTON = '#signInSubmit';
const CONTINUE = '.a-button-inner > #continue'

export default class LoginPage {

  static loginWith(email, password) {
    cy.get(EMAIL_INPUT).type(email).should('have.value', email);
    cy.get(CONTINUE).click({force:true})
    cy.get('body').then(($body) => {
      if ($body.find(CONTINUE).length) {
        cy.get(CONTINUE).click({force:true})
      }
    })
    cy.get(PASSWORD_INPUT).type(password).should('have.value',password)
    cy.get(LOGIN_BUTTON).click();
  }

  
}

/// <reference types="cypress"/>

describe('cenario de teste', () => {
  
  it.skip('regitrando ', () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type('Vitor')
    cy.get('#Text1').type('okok')
    cy.get('#username').type('SrVitinho')
    cy.get('#password').type('hello')
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain.text', 'Registration successful')
  })

  it.skip('Testando falha por falta ', () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register')
    cy.get('#firstName').type('Vitor')
    cy.get('#Text1').type('okok')
    cy.get('#username').type('SrVitinho')
    cy.get('#password').type('')
    cy.get('#password').clear()
    cy.get('.has-error > .help-block').should('have.text', 'Password is required')
    cy.get('.btn-primary').should('be.disabled')
  })

  it('Testando caso de sucesso', () => {
    let info = register()
    cy.get('#username').type(info[0])
    cy.get('#password').type(info[1])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should('contain.text', info[0])
  })

})

function register(){

  let secs = new Date().getSeconds().toString()
  let min = new Date().getMinutes().toString()
  let hours = new Date().getHours().toString() 
  
  let user = hours + min + secs + 'Id'
  let passwords = hours + min + secs + 'Senha'
  let userInfo = [user, passwords]

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('.btn-link').click()
  cy.get('#firstName').type(user)
  cy.get('#Text1').type(user)
  cy.get('#username').type(user)
  cy.get('#password').type(passwords)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should('contain.text', 'Registration successful')

  return userInfo
}
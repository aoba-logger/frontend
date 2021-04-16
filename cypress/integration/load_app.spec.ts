describe('App', () => {
  it('should nav to login page when there are no credentials', () => {
    cy.visit('http://localhost:3000')
    cy.url().should('include', 'login')
    cy.visit('http://localhost:3000/log-viewer')
    cy.url().should('include', 'login')
  })

  it('should nav to log viewer page when there are legal credentials', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('[data-testid="password-field"]').type("I")
    cy.get('[data-testid="login-button"]').click()
    cy.url().should('include', 'log-viewer')
    cy.visit('http://localhost:3000/log-viewer')
    cy.url().should('include', 'log-viewer')
    cy.visit('http://localhost:3000/login')
    cy.url().should('include', 'log-viewer')
  })

})
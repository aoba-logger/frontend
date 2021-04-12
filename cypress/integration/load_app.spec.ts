describe('App', () => {
  it('should nav to login page when there are no credentials', () => {
    cy.visit('http://localhost:3000')
    cy.url().should('include', 'login')
  })
})
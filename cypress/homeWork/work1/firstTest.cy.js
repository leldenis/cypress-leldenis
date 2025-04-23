describe('My first test', () => {
    it('Should have Google', () => {
      cy.visit('https://www.google.com.ua/');
      cy.title().should('eq', 'Google');
    });
  });
  
beforeEach(() => {
  cy.visit('https://guest:welcome2qauto@qauto.forstudy.space');
});

describe('Buttons from hiden', () => {
      
      it('Should have button Home', () => {
        cy.get('.-active').contains('Home').should('be.visible');
      });
    
      it('Should have button About', () => {
        cy.contains('button', 'About').should('be.visible');
      });
    
      it('Should button cContact', () => {
        cy.contains('button', 'Contact').should('be.visible');
      });
    
      it('Should have Guest Login', () => {
        cy.contains('button', 'Guest log in').should('be.visible');
      });

      it('Should have Sign in', () => {
        cy.contains('button', 'Sign In').should('be.visible');
      });

      it('Should have Sign up', () => {
        cy.contains('button', 'Sign up').should('be.visible');
      });
    });


describe('Buttons and links from footer', () => {

  it('Should have facebook button', () => {
    cy.get('.icon-facebook').should('be.visible');
  });

  it('Should have telegram button', () => {
    cy.get('.icon-telegram').should('be.visible');
  });

  it('Should have youtube button', () => {
    cy.get('.icon-youtube').should('be.visible');
  });

  it('Should have instagram button', () => {
    cy.get('.icon-instagram').should('be.visible');
  });

  it('Should have linkedin button', () => {
    cy.get('.icon-linkedin').should('be.visible');
  });

  it('Should have link to the ithillel site', () => {
    cy.get('a[href="https://ithillel.ua"]').should('contain.text', 'ithillel.ua');
  });

  it('Should have link to the hillel support', () => {
    cy.get('a[href="mailto:developer@ithillel.ua"]').should('contain.text', 'support@ithillel.ua');
  });

});
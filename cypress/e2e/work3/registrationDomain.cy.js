import '/cypress/support/commands'


beforeEach(() => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space');
    cy.get('.btn-primary').contains('Sign up').click();
  });

  describe('Title Verification', () => {
    it('should display the pop-up title', () => {
      cy.get('.modal-title').contains('Registration').should('be.visible');
    });
  });

  describe('Name Field Validations', () => {
    it('should display the "Name" label as visible', () => {
      cy.get('.form-group').contains('Name').should('be.visible');
    });

    it('should display an error "Name required" if field is empty', () => {
      cy.get('#signupName').click();
      cy.get('.modal-header').click();
      cy.get('.invalid-feedback').should('be.visible').contains('Name required');
    });

    it('should display an error "Name is invalid"', () => {
      cy.get('#signupName').type('3'); //wrong type
      cy.get('.modal-header').click();
      cy.get('.invalid-feedback').should('be.visible').contains('Name is invalid');
      cy.get('#signupName').clear();
      cy.get('#signupName').type(' John Doe '); // don't use trim
      cy.get('.invalid-feedback').should('be.visible').contains('Name is invalid');
    });

    it('should display an error "Name has to be from 2 to 20 characters long", when 1 symbol', () => {
      cy.get('#signupName').type('3');
      cy.get('.modal-header').click();
      cy.get('.invalid-feedback').should('be.visible').contains('Name has to be from 2 to 20 characters long');
    });

    it('should display an error "Name has to be from 2 to 20 characters long, when 22 symbols"', () => {
      cy.get('#signupName').type('2222222222333333333311'); //22
      cy.get('.modal-header').click();
      cy.get('.invalid-feedback').should('be.visible').contains('Name has to be from 2 to 20 characters long');
    });

    it('should display border color red when have an error', () => {
      cy.get('#signupName').type('3');
      cy.get('.modal-header').click();
      cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });
  });

  describe('Last name Field Validations', () => {
    it('should display the "Last name" label as visible', () => {
      cy.get('.form-group').contains('Last name').should('be.visible');
    });

    it('should display an error "Last name required" if field is empty', () => {
      cy.get('#signupLastName').click();
      cy.get('.modal-header').click();
      cy.get('.invalid-feedback').should('be.visible').contains('Last name required');
    });

    it('should display an error "Last name is invalid"', () => {
      cy.get('#signupLastName').type('3'); //wrong type
      cy.get('.modal-header').click();
      cy.get('.invalid-feedback').should('be.visible').contains('Last name is invalid');
      cy.get('#signupLastName').clear();
      cy.get('#signupLastName').type(' John Doe '); // don't use trim
      cy.get('.invalid-feedback').should('be.visible').contains('Last name is invalid');
    });

    it('should display an error "Name has to be from 2 to 20 characters long", when 1 symbol', () => {
      cy.get('#signupLastName').type('3');
      cy.get('.modal-header').click();
      cy.get('.invalid-feedback').should('be.visible').contains('Last name has to be from 2 to 20 characters long');
    });

    it('should display an error "Name has to be from 2 to 20 characters long, when 22 symbols"', () => {
      cy.get('#signupLastName').type('2222222222333333333311'); //22
      cy.get('.modal-header').click();
      cy.get('.invalid-feedback').should('be.visible').contains('Last name has to be from 2 to 20 characters long');
    });

    it('should display border color red when have an error', () => {
      cy.get('#signupLastName').type('3');
      cy.get('.modal-header').click();
      cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });
  });

  describe('Email Field Validations', () => {
    it('should display the "Email" label as visible', () => {
      cy.get('.form-group').contains('Email').should('be.visible');
    });

    it('should display an error if the "Email" field is empty', () => {
      cy.get('#signupEmail').click();
      cy.get('.modal-header').click();
      cy.get('.invalid-feedback').contains('Email required').should('be.visible');
    });

    it('should display an error for an invalid email format', () => {
      cy.get('#signupEmail').type('invalid-email');
      cy.get('.modal-header').click();
      cy.get('.invalid-feedback').contains('Email is incorrect').should('be.visible');
    });

    it('should display border color red when have an error', () => {
      cy.get('#signupEmail').type('3');
      cy.get('.modal-header').click();
      cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

  });

  describe('Password Field Validation', () => {
    it('should display the "Password" label as visible', () => {
      cy.get('.form-group').contains('Password').should('be.visible');
    });
  
    it('should display an error if the "Password" field is empty', () => {
      cy.get('#signupPassword').click();
      cy.get('.modal-header').click();
      cy.get('.invalid-feedback').contains('Password required').should('be.visible');
    });

    it('should display an error for a password shorter than 8 characters', () => {
      cy.get('#signupPassword').type('Short1', { sensitive: true });
      cy.get('.modal-header').click();
      cy.get('.invalid-feedback').should('be.visible')
        .contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    });

    it('should display an error for a password longer than 15 characters', () => {
      cy.get('#signupPassword').type('VeryLongPassword1', { sensitive: true });
      cy.get('.modal-header').click();
      cy.get('.invalid-feedback').should('be.visible')
        .contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    });

    it('should display an error for a password without an integer', () => {
      cy.get('#signupPassword').type('NoIntegersA', { sensitive: true });
      cy.get('.modal-header').click();
      cy.get('.invalid-feedback').should('be.visible')
      .contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    });

    it('should display an error for a password without a capital letter', () => {
      cy.get('#signupPassword').type('nocapital1', { sensitive: true });
      cy.get('.modal-header').click();
      cy.get('.invalid-feedback').should('be.visible')
      .contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    });

    it('should display an error for a password without a lowercase letter', () => {
      cy.get('#signupPassword').type('NOLOWERCASE1', { sensitive: true });
      cy.get('.modal-header').click();
      cy.get('.invalid-feedback').should('be.visible')
      .contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    });

    it('should change the border color to red for an invalid password', () => {
      cy.get('#signupPassword').type('NOLOWERCASE1', { sensitive: true });
      cy.get('.modal-header').click();
      cy.get('#signupPassword').should('have.css', 'border-color');
    });
  });
  
  describe('Re-enter Password Field Validation', () => {
    it('should display the "Re-enter password" label as visible', () => {
      cy.get('.form-group').contains('Re-enter password').should('be.visible');
    });
    it('should display "Re-enter password required" error when the re-enter password field is empty', () => {
      cy.get('#signupRepeatPassword').click();
      cy.get('.modal-header').click();
      cy.get('.invalid-feedback').should('be.visible').contains('Re-enter password required');
    });

    it('should display "Passwords do not match" error when passwords do not match', () => {
      cy.get('#signupPassword').type('ValidPass1aA', { sensitive: true });
      cy.get('#signupRepeatPassword').type('DiffPass2bB', { sensitive: true });
      cy.get('.modal-header').click();
      cy.get('.invalid-feedback').should('be.visible').contains('Passwords do not match');
    });

    it('should change the border color to red when passwords do not match', () => {
      cy.get('#signupPassword').type('ValidPass1aA', { sensitive: true });
      cy.get('#signupRepeatPassword').type('DiffPass2bB', { sensitive: true });
      cy.get('.modal-header').click();
      cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });
  
  });

  describe('Register Button Verification', () => {
    it('should display the "Register" button as visible', () => {
      cy.contains('button', 'Register').should('be.visible');
    });

    it('should have "Register" button is disabled', () => {
      cy.get('#signupName').type('Denys');
      cy.get('#signupLastName').type('Leliushkin');
      cy.get('#signupEmail').type('cineversehubb@gmail.com');
      cy.get('#signupPassword').type('ValidPass1aA', { sensitive: true });
      cy.get('#signupRepeatPassword').type('DiffPass2bB', { sensitive: true });
      cy.contains('button', 'Register').should('be.disabled');
    });
  });

  describe('Successful Registration and Login', () => {
    it('should have successful registration without an errors ', () => {
      const baseEmail = 'testuser@example.com';

      cy.get('#signupName').type('Denys');
      cy.get('#signupLastName').type('Leliushkin');
      cy.generateUniqueEmail(baseEmail).then((email) => {
      cy.get('#signupEmail').type(email)});
      cy.generateValidPassword().then((password) => {
      cy.get('#signupPassword').type(password);
      cy.get('#signupRepeatPassword').type(password);
      });
      cy.get('.modal-header').click();
      cy.get('.invalid-feedback').should('not.exist')
      cy.contains('button', 'Register').should('be.enabled').click();
      cy.get('.panel-page_heading').contains('Garage');
    });
  });
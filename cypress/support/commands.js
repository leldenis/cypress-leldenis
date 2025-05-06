Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
      options.log = false
      Cypress.log({
        $el: element,
        name: 'type',
        message: '*'.repeat(text.length),
      })
    }
  
    return originalFn(element, text, options)
  });

Cypress.Commands.add('generateUniqueEmail', (baseEmail) => {
  return `${baseEmail.split('@')[0]}+${Date.now()}@${baseEmail.split('@')[1]}`;
});

Cypress.Commands.add('generateValidPassword', () => {
  const length = Cypress._.random(8, 15);
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';

  let password = '';
  password += uppercaseChars.charAt(Cypress._.random(0, uppercaseChars.length - 1));
  password += lowercaseChars.charAt(Cypress._.random(0, lowercaseChars.length - 1));
  password += numberChars.charAt(Cypress._.random(0, numberChars.length - 1));

  const remainingLength = length - password.length;
  for (let i = 0; i < remainingLength; i++) {
    const charType = Cypress._.random(0, 2);
    switch (charType) {
      case 0:
        password += uppercaseChars.charAt(Cypress._.random(0, uppercaseChars.length - 1));
        break;
      case 1:
        password += lowercaseChars.charAt(Cypress._.random(0, lowercaseChars.length - 1));
        break;
      case 2:
        password += numberChars.charAt(Cypress._.random(0, numberChars.length - 1));
        break;
    }
  }

  password = Cypress._.shuffle(password.split('')).join('');
  return cy.wrap(password);
});

Cypress.Commands.add('login', () => {
  cy.visit('https://guest:welcome2qauto@qauto.forstudy.space');
  cy.get('.header_signin').contains('Sign In').click();
  cy.get('#signinEmail').type('welcome2qauto@qauto'); 
  cy.get('#signinPassword').type('ValidPassrd1', { sensitive: true }); 
  cy.contains('button', 'Login').click();
});
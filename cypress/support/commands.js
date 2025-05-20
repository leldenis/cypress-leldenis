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

Cypress.Commands.add('login', (email, password, baseUrl) => {
  cy.visit(baseUrl);
  cy.get('.header_signin').contains('Sign In').click();
  cy.get('#signinEmail').type(email); 
  cy.get('#signinPassword').type(password, { sensitive: true }); 
  cy.contains('button', 'Login').click();
});

Cypress.Commands.add('createExpense', (carId, mileage, liters, totalCost) => {
  const reportedAt = new Date().toISOString().split('T')[0];
  const baseUrl = Cypress.config('baseUrl');

  cy.request({
    method: 'POST',
    url: `${baseUrl}/api/expenses`,
    body: {
      carId,
      reportedAt,
      mileage,
      liters,
      totalCost,
      forceMileage: false
    }
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.data.carId).to.eq(carId);
    expect(response.body.data.totalCost).to.eq(totalCost);
    return response.body.data;
  });
});

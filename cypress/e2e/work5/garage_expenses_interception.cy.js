import GaragePage from '../../pageObject/garagePage';
import ExpensesPage from '../../pageObject/expensesPage';

describe('Garage and Expenses API/UI Tests', () => {
  const garagePage = new GaragePage();
  const expensesPage = new ExpensesPage();

  beforeEach(() => {
    const { username, password } = Cypress.env();
    const baseUrl = Cypress.config('baseUrl');

    cy.visit(baseUrl);
    cy.get('.header_signin').contains('Sign In').click();
    cy.get('#signinEmail').type(username);
    cy.get('#signinPassword').type(password, { sensitive: true });
    cy.contains('button', 'Login').click();
    cy.url().should('include', '/panel/garage');
    cy.get('.panel-page').should('be.visible').contains('Garage');
  });

  it('should create car, validate via API, add expense and check in UI', () => {
    cy.intercept('POST', ' https://qauto.forstudy.space/api/cars').as('createCar');

    garagePage.clickAddCarButton();
    garagePage.selectCarMake('BMW');
    garagePage.selectCarModel('X5');
    garagePage.enterCarMileage('1000');
    garagePage.clickAddButton();
    garagePage.verifySuccessMessage('Car added');

    cy.wait('@createCar').then((interception) => {
      expect(interception.response.statusCode).to.eq(201);
      const carId = interception.response.body.data.id;
      cy.wrap(carId).as('createdCarId');
    });

    cy.get('@createdCarId').then((carId) => {
      cy.request('GET', 'https://qauto.forstudy.space/api/cars').then((response) => {
        expect(response.status).to.eq(200);
        const createdCar = response.body.data.find(car => car.id === carId);
        expect(createdCar).to.not.be.undefined;
        expect(createdCar.brand).to.eq('BMW');
        expect(createdCar.model).to.eq('X5');
      });
    });

    cy.get('@createdCarId').then((carId) => {
    cy.createExpense(carId, 1100, 50, 1500).then((expenseData) => {
        expect(expenseData.totalCost).to.eq(1500);
    });
    });

    expensesPage.clickFuelExpenses();
    cy.get('tbody > tr > :nth-child(4)').contains('1500').should('be.visible');
  });
});

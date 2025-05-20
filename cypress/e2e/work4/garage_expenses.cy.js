import GaragePage from '../../pageObject/garagePage'
import ExpensesPage from '../../pageObject/expensesPage';

describe('Garage and Expenses Functionality', () => {
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

  it('should add a car to the garage', () => {
    garagePage.clickAddCarButton();
    garagePage.selectCarMake('BMW');
    garagePage.selectCarModel('X5');
    garagePage.enterCarMileage('1000');
    garagePage.clickAddButton();
    garagePage.verifySuccessMessage('Car added');
  });

  it('should add fuel expenses to the car', () => {
    expensesPage.clickFuelExpenses(),
    expensesPage.clickAddExpenseButton();
    expensesPage.enterMileageInput('1100');
    expensesPage.enterLitresInput('50');
    expensesPage.enterCostInput('3.50');
    expensesPage.clickSaveExpenseButton();
    expensesPage.verifyExpenseSuccessMessage('Fuel expense added');
  });
});

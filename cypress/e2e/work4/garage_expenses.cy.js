import GaragePage from './garagePage.js';
import ExpensesPage from './expensesPage.js';
import credentials from './credentials.json';

describe('Garage and Expenses Functionality', () => {
  let garagePage;
  let expensesPage;

  beforeEach(() => {
    cy.login(
      credentials.username.qauto,
      credentials.password.qauto,
      credentials.baseUrl.qauto
    );
    garagePage = new GaragePage();
    expensesPage = new ExpensesPage();
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
    expensesPage.clickFuelExpenses();
    expensesPage.clickAddExpenseButton();
    expensesPage.enterMileageInput('1100');
    expensesPage.enterLitresInput('50');
    expensesPage.enterCostInput('3.50');
    expensesPage.clickSaveExpenseButton();
    expensesPage.verifyExpenseSuccessMessage('Fuel expense added');
  });
});
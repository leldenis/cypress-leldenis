class ExpensesPage {
    elements = {
      fuelExpenses: () => cy.get('[routerlink="expenses"]'),
      addExpenseButton: () => cy.contains('button', 'Add an expense'),
      exprenseMileageInput: () => cy.get('#addExpenseMileage'),
      expenseLitresInput: () => cy.get('#addExpenseLiters'),
      expenseCostInput: () => cy.get('#addExpenseTotalCost'),
      saveExpenseButton: () => cy.get('.modal-footer > .btn-primary'),
      expenseSuccessMessage: () => cy.get('.alert-success'),
    };
  
    clickFuelExpenses() {
        this.elements.fuelExpenses().click();
    }

    clickAddExpenseButton() {
        this.elements.addExpenseButton().click();
    }

    enterMileageInput(mileage) {
        this.elements.exprenseMileageInput().clear();
        this.elements.exprenseMileageInput().type(mileage);
      }
  
    enterLitresInput(litres) {
        this.elements.expenseLitresInput().clear();
        this.elements.expenseLitresInput().type(litres);
    }
  
    enterCostInput(cost) {
        this.elements.expenseCostInput().clear();
        this.elements.expenseCostInput().type(cost);
    }
  
    clickSaveExpenseButton() {
        this.elements.saveExpenseButton().click();
    }
  
    verifyExpenseSuccessMessage(message) {
        this.elements.expenseSuccessMessage().should('be.visible').contains(message);
    }
  }
  
  export default ExpensesPage;
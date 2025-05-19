class GaragePage {
    elements = {
      addCarButton: () => cy.contains('button', 'Add car'),
      carMakeDropdown: () => cy.get('#addCarBrand'),
      carModelDropdown: () => cy.get('#addCarModel'),
      carMileageInput: () => cy.get('#addCarMileage'),
      addButton: () => cy.get('.modal-footer > .btn-primary'),
      successMessage: () => cy.get('.alert-success'),
    };
  
    clickAddCarButton() {
      this.elements.addCarButton().click();
    }
  
    selectCarMake(make) {
      this.elements.carMakeDropdown().select(make);
    }
  
    selectCarModel(model) {
      this.elements.carModelDropdown().select(model);
    }
  
    enterCarMileage(mileage) {
      this.elements.carMileageInput().clear();
      this.elements.carMileageInput().type(mileage);
    }
  
    clickAddButton() {
      this.elements.addButton().click();
    }
  
    verifySuccessMessage(message) {
      this.elements.successMessage().should('be.visible').contains(message);
    }
  }
  
  export default GaragePage;
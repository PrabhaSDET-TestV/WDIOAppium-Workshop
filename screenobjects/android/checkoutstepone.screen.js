class CheckoutStepOneScreen {
    // Getters for form fields
    get firstNameInput() {
      return $('~test-First Name');
    }
  
    get lastNameInput() {
      return $('~test-Last Name');
    }
  
    get zipCodeInput() {
      return $('~test-Zip/Postal Code');
    }
  
    // Getter for CONTINUE button
    get continueBtn() {
      return $('~test-CONTINUE');
    }
  
    // Method to fill first name
    async enterFirstName(firstName) {
      await this.firstNameInput.waitForDisplayed();
      await this.firstNameInput.setValue(firstName);
    }
  
    // Method to fill last name
    async enterLastName(lastName) {
      await this.lastNameInput.setValue(lastName);
    }
  
    // Method to fill zip code
    async enterZipCode(zip) {
      await this.zipCodeInput.setValue(zip);
    }
  
    // Method to fill all fields
    async fillCheckoutForm(firstName, lastName, zip) {
      await this.enterFirstName(firstName);
      await this.enterLastName(lastName);
      await this.enterZipCode(zip);
    }
  
    // Method to tap continue
    async tapContinue() {
      await this.continueBtn.click();
    }
  }
  
  export default new CheckoutStepOneScreen();
  
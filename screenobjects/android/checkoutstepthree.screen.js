class CheckoutStepThreeScreen {
    // Success message element
    get successMsg() {
      return $('//android.widget.TextView[@text="THANK YOU FOR YOU ORDER"]');
    }
  
    /**
     * Get the success message text
     * @returns {Promise<string>}
     */
    async getSuccessMessage() {
      await this.successMsg.waitForDisplayed();
      return await this.successMsg.getText();
    }
  }
  
  export default new CheckoutStepThreeScreen();
  
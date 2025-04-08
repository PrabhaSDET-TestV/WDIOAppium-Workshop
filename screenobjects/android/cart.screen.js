class CartScreen {
    // Getter for the CHECKOUT button
    get checkoutBtn() {
      return $('//android.widget.TextView[@text="CHECKOUT"]');
    }
  
    // Method to tap the checkout button
    async proceedToCheckout() {
      await this.checkoutBtn.waitForDisplayed();
      await this.checkoutBtn.click();
      console.log("Proceeded to Checkout");
    }
  }
  
  export default new CartScreen();
  
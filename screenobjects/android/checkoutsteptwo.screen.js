class CheckoutStepTwoScreen {
    // Getter for FINISH button
    get finishBtn() {
      return $('~test-FINISH');
    }
  
    // Method to tap FINISH
    async tapFinish() {
      // Scroll until you see a reference text (change if needed)
      await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("FINISH")');

      await this.finishBtn.waitForDisplayed();
      await this.finishBtn.click();
    }
  }
  
  export default new CheckoutStepTwoScreen();
  
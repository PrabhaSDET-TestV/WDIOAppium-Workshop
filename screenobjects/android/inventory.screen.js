class InventoryScreen {
    // Getter for first ADD TO CART button
    get firstAddToCartBtn() {
      return $('(//android.widget.TextView[@text="ADD TO CART"])[1]');
    }
  
    // Getter for cart icon
    get cartIcon() {
      return $('//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.ImageView');
    }
  
    // Method to click on Add to Cart
    async addToCart() {
      await this.firstAddToCartBtn.waitForDisplayed();
      await this.firstAddToCartBtn.click();
      console.log("Clicked on first ADD TO CART");
    }
  
    // Method to open cart
    async openCart() {
      await this.cartIcon.waitForDisplayed();
      await this.cartIcon.click();
      console.log("Cart icon clicked");
    }
  }
  
  export default new InventoryScreen();
  
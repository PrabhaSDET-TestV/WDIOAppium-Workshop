class InventoryScreen {
    // Locators
    get products() {
      return $$('android=new UiSelector().className("android.view.ViewGroup").resourceIdMatches(".*inventory_item.*")');
    }
  
    get cartIcon() {
      return $('~test-Cart');
    }
  
    get cartBadge() {
      return $('~test-Cart').$('android.widget.TextView');
    }
  
    /**
     * Add a specific product to the cart by name
     * @param {string} productName
     */
    async addToCart(productName) {
      const productCards = await this.products;
      
      for (let card of productCards) {
        const nameEl = await card.$('~test-Item title');
        const nameText = await nameEl.getText();
  
        if (nameText.includes(productName)) {
          const addToCartBtn = await card.$('//android.widget.TextView[@text="ADD TO CART"]');
          await addToCartBtn.click();
          break;
        }
      }
    }
  
    /**
     * Tap the cart icon
     */
    async clickCartIcon() {
      await this.cartIcon.click();
    }
  
    /**
     * Verify the number of items in the cart
     * @param {string} expectedCount
     */
    async verifyCartCount(expectedCount) {
      await expect(this.cartBadge).toHaveText(expectedCount);
      console.log(`Cart count matched: ${expectedCount}`);
    }
  }
  
  export default new InventoryScreen();
  
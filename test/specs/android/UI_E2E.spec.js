import LoginScreen from '../../../screenobjects/android/login.screen';
import InventoryScreen from '../../../screenobjects/android/inventory.screen.js';

describe('E2E Test Suite', () => {
  it('E2E Order Placement for Sauce Labs Backpack', async () => {
    await LoginScreen.login(process.env.USERNAME, process.env.PASSWORD);
    // Add assertion depending on your post-login screen

    await InventoryScreen.addToCart('Sauce Labs Backpack');
    await InventoryScreen.verifyCartCount('1');
    await InventoryScreen.clickCartIcon();

  });
});

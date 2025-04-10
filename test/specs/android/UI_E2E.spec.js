import LoginScreen from '../../../screenobjects/android/login.screen';
import InventoryScreen from '../../../screenobjects/android/inventory.screen.js';
import CartScreen from '../../../screenobjects/android/cart.screen';
import CheckoutStepOneScreen from '../../../screenobjects/android/checkoutstepone.screen';
import CheckoutStepTwoScreen from '../../../screenobjects/android/checkoutsteptwo.screen';
import CheckoutStepThreeScreen from '../../../screenobjects/android/checkoutstepthree.screen';

describe('E2E Test Suite', () => {
  it('E2E Order Placement for Sauce Labs Backpack', async () => {
    await LoginScreen.login(process.env.USERNAME, process.env.PASSWORD);
    
    await InventoryScreen.addToCart();
    await InventoryScreen.openCart();

    await CartScreen.proceedToCheckout();

    await CheckoutStepOneScreen.fillCheckoutForm('Santhosh', 'Kumar', '600001');
    await CheckoutStepOneScreen.tapContinue();

    await CheckoutStepTwoScreen.tapFinish();

    const message = await CheckoutStepThreeScreen.getSuccessMessage();
    await expect(message).toEqual('THANK YOU FOR YOU ORDER');
  });
});

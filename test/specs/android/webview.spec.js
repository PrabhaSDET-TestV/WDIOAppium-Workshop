import LoginScreen from '../../../screenobjects/android/login.screen.js';
import MenuNav from '../../../screenobjects/android/menuNav.screen.js';

describe('WebView Navigation Test', () => {
    it('should login and navigate to WebView screen', async () => {
        /** Perform Login */
        await LoginScreen.login(process.env.USERNAME, process.env.PASSWORD);

        /** Open menu in the left*/
        await MenuNav.clickMenuIcon();

        /** Navigate to WebView screen */
        await MenuNav.clickWebView();

    });
});

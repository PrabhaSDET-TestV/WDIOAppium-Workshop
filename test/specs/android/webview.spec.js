import LoginScreen from "../../../screenobjects/android/login.screen.js";
import MenuNav from "../../../screenobjects/android/menuNav.screen.js";
import WebViewScreen from "../../../screenobjects/android/webview.screen.js";

describe("WebView Navigation and Interaction Test", () => {
  it("should login and interact with WebView content", async () => {
    // Step 1: Perform Login using environment variables
    await LoginScreen.login(process.env.USERNAME, process.env.PASSWORD);

    // Step 2: Open the left-side menu
    await MenuNav.clickMenuIcon();

    // Step 3: Navigate to the WebView screen
    await MenuNav.clickWebView();

    // Step 4: Enter URL and load site
    await WebViewScreen.enterUrl("www.w3schools.com");
    await WebViewScreen.clickGoToSite();

    // Step 5: Log current and all available contexts
    const currentContext = await driver.getContext();
    console.log("Current Context:", currentContext);

    const allContexts = await driver.getContexts();
    console.log("All Contexts:", allContexts); // should include WEBVIEW_com.swaglabsmobileapp

    // Step 6: Switch context to WebView
    await driver.switchContext("WEBVIEW_com.swaglabsmobileapp");

    // Step 7: Interact with elements inside WebView (browser-style selectors)
    const searchInput = await $('#search2');
    await searchInput.setValue("HTML");

    const searchButton = await $("#learntocode_searchbtn");
    await searchButton.click();

    // Step 8: Optionally switch back to native app
    await driver.switchContext("NATIVE_APP");
    await driver.back(); // Optional: Go back to previous native screen
  });
});

/**
 * Enabling WebView Debugging:
 *    To inspect WebViews in Chrome, the app must enable debugging:
 *    Add this in your Android app's main activity:
 *
 *    ```java
 *    WebView.setWebContentsDebuggingEnabled(true);
 *    ```
 *
 * 🧪 Inspecting WebViews with Chrome:
 *    1. Connect your Android device or emulator via USB or Android Studio.
 *    2. Open Chrome on your desktop and navigate to:
 *        chrome://inspect/#devices
 *    3. You’ll see the WebViews listed from your app, even if you don’t know the exact URL.
 *    4. Click “inspect” next to the WebView to open Chrome DevTools and debug live.
 */

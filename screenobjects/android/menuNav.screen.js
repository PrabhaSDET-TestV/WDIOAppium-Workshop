/**
 * Enum representing all available menu items
 */
const MenuOptions = Object.freeze({
    ALL_ITEMS: 'ALL ITEMS',
    WEBVIEW: 'WEBVIEW',
    QR_CODE_SCANNER: 'QR CODE SCANNER',
    GEO_LOCATION: 'GEO LOCATION',
    DRAWING: 'DRAWING',
    ABOUT: 'ABOUT',
    LOGOUT: 'LOGOUT',
    RESET_APP_STATE: 'RESET APP STATE',
});

/**
 * Page Object for the Menu Navigation
 */
class MenuNav {
    /** Menu icon on top-left corner */
    get menuIcon() {
        return $('android=new UiSelector().className("android.widget.ImageView").instance(1)');
    }

    /** Returns the element for a given menu item based on visible text */
    menuItem(optionText) {
        return $(`android=new UiSelector().text("${optionText}")`);
    }

    /** Clicks the hamburger menu icon */
    async clickMenuIcon() {
        await this.menuIcon.click();
    }

    /** Clicks a menu item using its enum value */
    async clickMenuItem(option) {
        await this.menuItem(option).click();
    }

    /** Shortcut for clicking "ALL ITEMS" */
    async clickAllItems() {
        await this.clickMenuItem(MenuOptions.ALL_ITEMS);
    }

    /** Shortcut for clicking "WEBVIEW" */
    async clickWebView() {
        await this.clickMenuItem(MenuOptions.WEBVIEW);
    }

    /** Shortcut for clicking "QR CODE SCANNER" */
    async clickQrCodeScanner() {
        await this.clickMenuItem(MenuOptions.QR_CODE_SCANNER);
    }

    /** Shortcut for clicking "GEO LOCATION" */
    async clickGeoLocation() {
        await this.clickMenuItem(MenuOptions.GEO_LOCATION);
    }

    /** Shortcut for clicking "DRAWING" */
    async clickDrawing() {
        await this.clickMenuItem(MenuOptions.DRAWING);
    }

    /** Shortcut for clicking "ABOUT" */
    async clickAbout() {
        await this.clickMenuItem(MenuOptions.ABOUT);
    }

    /** Shortcut for clicking "LOGOUT" */
    async clickLogout() {
        await this.clickMenuItem(MenuOptions.LOGOUT);
    }

    /** Shortcut for clicking "RESET APP STATE" */
    async clickResetAppState() {
        await this.clickMenuItem(MenuOptions.RESET_APP_STATE);
    }
}

export { MenuOptions };
export default new MenuNav();

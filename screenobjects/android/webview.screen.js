class WebViewScreen {
    /**
     * Input field to enter URL
     */
    get inputUrl() {
        return $('~test-enter a https url here...');
    }

    /**
     * GO TO SITE button
     */
    get goToSiteBtn() {
        return $('~test-GO TO SITE');
    }

    /**
     * Enter a URL into the input field
     * @param {string} url - The URL to navigate to
     */
    async enterUrl(url) {
        await this.inputUrl.setValue(url);
    }

    /**
     * Tap on GO TO SITE button
     */
    async clickGoToSite() {
        await this.goToSiteBtn.click();
    }
}

export default new WebViewScreen();

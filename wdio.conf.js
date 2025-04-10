import path from "path";
import dotenv from "dotenv";
dotenv.config();

export const config = {
  runner: "local",
  specs: ["./test/specs/android/*.js"],
  exclude: [],
  maxInstances: 10,
  services: ["appium"],
  hostname: "localhost",
  port: 4723,
  path: "/wd/hub",

  /**
   * =============================================
   * TASK: Parallel Execution of Tests on Multiple Emulators
   * =============================================
   * GOAL:
   * Configure WebdriverIO to run test scripts in parallel
   * across multiple Android emulators using Appium.
   *
   * SOLUTION:
   * - Defined two capabilities: Pixel_9 (Android 16.0) and Pixel_8 (Android 14.0).
   * - Set `maxInstances` to 10, allowing multiple sessions to run in parallel.
   * - With this config, if you have one test script, it will be executed
   *   concurrently on both Pixel_9 and Pixel_8 emulators.
   * - WebdriverIO handles this automatically — no manual parallel logic needed.
   * =============================================
   */

  capabilities: [
    {
      "appium:platformName": "Android",
      "appium:deviceName": "Pixel_9",
      "appium:platformVersion": "16.0",
      "appium:automationName": "UiAutomator2",
      "appium:app": path.join(process.cwd(), "app/android/SauceLabs.apk"),
      "appium:appWaitActivity": "*",
      "appium:autoGrantPermissions": true,
      "appium:noReset": true,
    },
    {
      "appium:platformName": "Android",
      "appium:deviceName": "Pixel_8",
      "appium:platformVersion": "14.0",
      "appium:automationName": "UiAutomator2",
      "appium:app": path.join(process.cwd(), "app/android/SauceLabs.apk"),
      "appium:appWaitActivity": "*",
      "appium:autoGrantPermissions": true,
      "appium:noReset": true,
    },
  ],

  logLevel: "info",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};

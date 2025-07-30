// utils/baseTest.js

//Importing Playwright's 'test' and 'expect' from the testing library
import { test as base, expect } from '@playwright/test';

//Creating a custom test object by extending the base Playwright test
const test = base.extend({
  // This defines a custom behavior for the 'page' object
  // Playwright will call this function before each test and provide the browser 'page'
  page: async ({ page }, use) => {

    //Navigate to the Automation Exercise website before each test
    await page.goto('/');

    //Assert that the page title includes 'Automation Exercise'
    await expect(page).toHaveTitle(/Automation Exercise/i);

    // Log the current URL to the console for debugging purposes
    console.log('Navigated to:', page.url());

    //Pass control back to the test using this extended page
    await use(page);
  },
});

//Export the customized 'test' and the standard 'expect' so you can use them in your test files
export { test, expect };

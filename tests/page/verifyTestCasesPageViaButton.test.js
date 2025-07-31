//verifyTestCasesPageViaButton.test.js
// This test verifies the functionality of launching the Test Cases page via a button click

import { test, expect } from '../../utils/baseTest.js';
import * as productPage from '../../pageObject/productPage.js';

test('should launch the test cases page when click test cases button', async ({ page }) => {
  await productPage.launchTestCasesPageViaButton(page);
});


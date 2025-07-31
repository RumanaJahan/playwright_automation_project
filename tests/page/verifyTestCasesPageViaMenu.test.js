// verifyTestCasesPageViaMenu.test.js
// This test verifies the functionality of launching the Test Cases page via a menu click

import { test, expect } from '../../utils/baseTest.js';
import * as productPage from '../../pageObject/productPage.js';

test('should launch the test cases page when click test cases menu', async ({ page }) => {
  await productPage.launchTestCasesPageViaMenu(page);
});


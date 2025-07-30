//verifyTestCasesPage.test.js
import { test, expect } from '../../utils/baseTest.js';
import * as productPage from '../../pageObject/productPage.js';

test('should launch the product page', async ({ page }) => {
  await productPage.launchProductPage(page);
});


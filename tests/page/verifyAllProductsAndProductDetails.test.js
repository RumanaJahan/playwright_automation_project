// verifyAllProductsAndProductDetails.test.js
// This test suite includes tests for launching the product page and verifying product details.

import { test, expect } from '../../utils/baseTest.js';
import * as productPage from '../../pageObject/productPage.js';

//Test suite for product page functionalities
test.describe('Product page Tests', () => {

   test.beforeEach(async ({ page }) => 
   {
    //Launch the product page before each test 
    await productPage.launchProductPage(page);
   });

   test('should launch the product detail page', async ({ page }) => 
   {
    //Launch the product detail page 
    await productPage.verifyProductDetails(page);
   });

});

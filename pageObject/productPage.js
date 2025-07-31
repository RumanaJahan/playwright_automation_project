// This file contains pre-written test actions which can be reused on multiple test cases
//--------------------------------------------------------------------------------------------------------------------------
import { expect} from '@playwright/test';

//--------------------------------------------------------------------------------------------------------------------------
//LAUNCH SPECIFIC PAGES
//--------------------------------------------------------------------------------------------------------------------------

export async function launchTestCasesPageViaButton(page) 
{ 
    //Click on the 'Test Cases' button to navigate to the test cases page
    const testCasesButton = page.getByRole('button', { name: 'Test Cases' });

    //Wait for the button to be visible before clicking
    await testCasesButton.waitFor({ state: 'visible' });
    
    //Click the 'Test Cases' button
    await testCasesButton.click();

    //Assert that the URL contains 'test_cases' to confirm navigation
    await expect(page).toHaveURL(/.*test_cases/);
    
    //Assert that the heading 'Test Cases' is visible on the page
    await expect(page.locator('h2.title')).toHaveText('Test Cases');

    //Log a message to the console indicating successful navigation
    console.log('Test Cases page launched successfully');
}

export async function launchTestCasesPageViaMenu(page) 
{ 
    // Locate and click the 'Test Cases' link from the navigation bar
    const testCasesLink = page.locator('header').getByRole('link', { name: 'Test Cases' });

    // Ensure it is visible before interacting
    await testCasesLink.waitFor({ state: 'visible' });
    
    //Click the 'Test Cases' link
    await testCasesLink.click();

    //Assert that the URL contains 'test_cases' to confirm navigation
    await expect(page).toHaveURL(/.*test_cases/);
    
    //Assert that the heading 'Test Cases' is visible on the page
    await expect(page.locator('h2.title')).toHaveText('Test Cases');

    //Log a message to the console indicating successful navigation
    console.log('Test Cases page launched successfully');
}

export async function launchProductPage(page) 
{  
    //Locate and click the 'Test Cases' link from the navigation bar
    const productsLink = page.locator('header').getByRole('link', { name: 'Products' });
    
    //Ensure it is visible before interacting
    await productsLink.waitFor({ state: 'visible' });
    
    //Click the 'Products' link
    await productsLink.click();
     
    //Assert that the URL contains 'product' to confirm navigation
    await expect(page).toHaveURL(/.*product/);

    //Assert that the heading 'All Products' is visible on the page
    await expect(page.locator('h2.title')).toHaveText('All Products');

    // Log a message to the console indicating successful navigation
    console.log('Product page launched successfully');
}
 
export async function verifyProductDetails(page) 
{
    // Locate the first product link and click it
    const firstProductLink = page.locator('a[href^="/product_details/"]').first();
    
    //click on the first product link to navigate to its details page
    await firstProductLink.click();

    // Verify navigation to product details page
    await expect(page).toHaveURL(/.*\/product_details\/\d+/);

    // Locate the section that contains all product details (name, category, price, etc.)
    const productInfo = page.locator('.product-information');
    
    //locate the product name inside the product information section
    const productLocator = productInfo.locator('h2');
    
    // Assert that the category is visible
    await expect(productLocator).toBeVisible();
    
    // Get the product name from the h2 element inside the section
    const productName = await productInfo.locator('h2').textContent();
    
    // Print it to the console
    console.log('Product Name:', productName);

    //locate the category paragraph inside the product information section
    const categoryLocator = productInfo.locator('p').filter({ hasText: 'Category' });
    
    // Assert that the product category is visible
    await expect(categoryLocator).toBeVisible();

    // Get the text content of the category paragraph
    const productCategory = await categoryLocator.textContent();
  
    // Print the category to the console
    console.log('Product Category:', productCategory);
    
    //locate the price span inside the product information section
    const priceLocator = productInfo.locator('span').nth(1);

    //Assert that the price is visible
    await expect(priceLocator).toBeVisible();

    //Get the text content of the price span
    const productPrice = await priceLocator.textContent();
    
    //Print the price to the console
    console.log('Product Price:', productPrice);

    //locate the availability paragraph inside the product information section
    const quantityLocator = productInfo.locator('input[name="quantity"]');
    
    //Assert that the quantity input field is visible
    await expect(quantityLocator).toBeVisible();

    //Get the value of the quantity input field
    const productQuantity = await quantityLocator.inputValue();
    
    //Print the quantity to the console        
    console.log('Product Quantity:', productQuantity);

    //locate the availability paragraph inside the product information section
    const availabilityLocator = productInfo.locator('p').filter({ hasText: 'Availability' });
    
    //Assert that the availability is visible
    await expect(availabilityLocator).toBeVisible();

    //Get the text content of the availability paragraph
    const productAvailability = await availabilityLocator.textContent();

    //Print the availability to the console
    console.log('Product Availability:', productAvailability);

    const conditionLocator = productInfo.locator('p').filter({ hasText: 'Condition' });
    //Assert that the condition is visible
    await expect(conditionLocator).toBeVisible();

    //Get the text content of the condition paragraph
    const productCondition = await conditionLocator.textContent();
    
    //Print the condition to the console
    console.log('Product Condition:', productCondition);

    //locate the brand paragraph inside the product information section
    const brandLocator = productInfo.locator('p').filter({ hasText: 'Brand' });
   
    //Assert that the brand is visible
    await expect(brandLocator).toBeVisible();

    //Get the text content of the brand paragraph
    const productBrand = await brandLocator.textContent();
    
    //Print the brand to the console
    console.log('Product Brand:', productBrand);
}
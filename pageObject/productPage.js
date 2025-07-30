// This file contains pre-written test actions which can be reused on multiple test cases
//--------------------------------------------------------------------------------------------------------------------------
import { expect} from '@playwright/test';

//--------------------------------------------------------------------------------------------------------------------------
//LAUNCH SPECIFIC PAGES
//--------------------------------------------------------------------------------------------------------------------------

export async function launchTestCasesPage(page) 
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
    await expect(page.locator('xpath=//*[@id="form"]/div/div[1]/div/h2/b')).toHaveText('Test Cases');

    //Log a message to the console indicating successful navigation
    console.log('Test Cases page launched successfully');


}
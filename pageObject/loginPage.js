// This file contains pre-written test actions which can be reused on multiple test cases
//--------------------------------------------------------------------------------------------------------------------------
import { expect, devices, chromium } from '@playwright/test';

 //--------------------------------------------------------------------------------------------------------------------------
 //LAUNCH SPECIFIC PAGES
 //--------------------------------------------------------------------------------------------------------------------------

 export async function launchDesktopAutomationWebsite(page) 
 {
   const nav = await page.goto('/');
   const desktopurl = page.url();
   await expect(page).toHaveURL(desktopurl);
   console.log('Current url is:', desktopurl);
   await page.setViewportSize({ width: 1920, height: 1080 });
   //Verify and print the page title
   const desktoptitle = await page.title();
   console.log('Page title:', desktoptitle);
 }

 export async function launchMobileAutomationWebsite() 
 {
   const browser = await chromium.launch();
   const context = await browser.newContext({ ...devices['iPhone X'] });
   const mobile = await context.newPage();
   await mobile.goto('/');
   const mobileurl = mobile.url();
   await expect(mobile).toHaveURL(mobileurl);
   console.log('Current url is:', mobileurl);
   //Verify and print the page title
   const mobiletitle = await mobile.title();
   console.log('Page title:', mobiletitle);
   await mobile.setViewportSize({ width: 450, height: 1070});
   return mobile;
 }
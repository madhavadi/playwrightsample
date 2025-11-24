import {test,expect} from '@playwright/test';

test('Mobile sample',async({page}) => {

    await page.goto('https://practice.expandtesting.com/inputs');
    await page.fill('#input-number','22');
    await page.fill('#input-text','Madhav');
    await page.fill('#input-password','Mahi');
    await page.click('#btn-display-inputs');

    console.log("Values display successfully");

});
    
    
   

import {test,expect} from '@playwright/test';

test('Viewport simulation',async({page})=>{
    
    await page.setViewportSize({width:390,height:844});
    await page.goto('https://getbootstrap.com/');

    const hamburgerButton = page.locator('.navbar-toggler');

    const navlink = page.locator ('.navbar-collapse');

    await expect(hamburgerButton).toBeVisible();

    await expect(navlink).not.toBeVisible();

    console.log('Test passed');
});
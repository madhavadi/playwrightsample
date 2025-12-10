import {test,expect} from '@playwright/test';

test('Saucedemo validations',async ({page})=>{
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name','standard_user');
    await page.fill('#password','secret_sauce');
    await page.click('#login-button');

    const title = page.locator('.title');
    const backpack = page.getByText('Sauce Labs Backpack');

    await expect(backpack).toBeTruthy();
    await expect(title).toContainText('Products');
    await page.screenshot({path : 'screenshot.png'});
});
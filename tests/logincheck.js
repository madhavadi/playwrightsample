const { test,expect } = require('@playwright/test');

test('Instagram login',async ({page})=> {
    await page.goto('https://www.instagram.com/accounts/login/#');
    const loginButton = page.locator('text = Log in')
    await expect(loginButton).toBeVisible();
} 
);
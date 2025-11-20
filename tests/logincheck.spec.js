import { test,expect } from '@playwright/test';

test('Instagram login',async ({page})=> {
    await page.goto('https://www.instagram.com/accounts/login/#');
    const loginButton = page.locator('button[type="submit"]');
    await expect(loginButton).toBeVisible();
} 
);
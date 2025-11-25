import { test,expect } from '@playwright/test';

test('Facebook login',async ({page})=> {
    await page.goto('https://www.facebook.com/');
    const Fb = page.getByRole('button',{name : /Create new account/});
    await expect(Fb).toBeVisible();

    
} 
);
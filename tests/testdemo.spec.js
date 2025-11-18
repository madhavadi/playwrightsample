import {test,expect} from '@playwright/test';

test.describe('Login scenario in a page',() => {

    test('Successful login',async ({page}) => {
        await page.goto('https://www.saucedemo.com');
        await page.fill('#user-name','standard_user');
        await page.fill('#password','secret_sauce');
        await (page).getByRole('button',{Name : 'Login'}).click();

        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await expect(page.locator('.title')).toHaveText('Products');
    });

   test('Wrong credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'random');
    await page.fill('#password', 'randomagain');
    await page.click('#login-button');

    const error = page.locator('[data-test="error"]');
    await expect(error).toBeVisible();
    await expect(error).toContainText('Username and password do not match');
  });

    test ('Empty fields',async ({page}) => {
        await page.goto('https://www.saucedemo.com');
        await page.click('#login-button');

        const error = page.locator ('[data-test = "error"]');
        await expect(error).toBeVisible();
        await expect(error).toContainText('Username is required');
    });


}
);
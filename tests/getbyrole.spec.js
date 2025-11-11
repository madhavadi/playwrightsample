import {test,expect} from '@playwright/test';

test('getbyroletestold',async ({page}) => {
    await page.goto('https://www.saucedemo.com');
    await page.fill('[data-test = "username"]','standard_user');
    await page.fill ('[data-test = "password"]','secret_sauce');
    await (page).getByRole('button',{name : 'Login' }).click();

});
import {test,expect} from '@playwright/test';
test.skip(process.env.CI,'Temporarily skipping on CI until stable');

test('Add to cart demo',async({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('[data-test = "username"]','standard_user');
    await page.fill ('[data-test = "password"]','secret_sauce');
    await page.click('#login-button');

    await expect (page).toHaveURL('/inventory/');

    await page.click('[data-test = "add-to-cart-sauce-labs-backpack"]');

    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

});
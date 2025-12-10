import {test,expect} from '@playwright/test';

test('Viewport validation',async ({page})=>{
    await page.setViewportSize({width:393,height:851});
    await page.goto('https://playwright.dev/docs/intro');

    const searchIcon = page.getByRole('button',{name:'Search'});
    const sidebar = page.getByRole('navigation',{name:'Installation'});

    await expect(searchIcon).toBeVisible();
    await expect(sidebar).not.toBeVisible();

    console.log('Test passed');
});
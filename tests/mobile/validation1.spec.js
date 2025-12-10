import {test,expect} from '@playwright/test';

test('Wikipedia test',async({page})=>{
    await page.goto('https://www.wikipedia.org');
    await expect(page.locator('#searchInput')).toBeVisible();
    await expect(page.getByRole('link',{name : 'English'})).toBeVisible();
    expect(await page.title()).toContain('Wikipedia');



});
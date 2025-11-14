import {test,expect} from '@playwright/test';

test ('Retry test',async ({page})=> {
    await page.goto('https://www.amazon.in');
    await (page).getByText('Bestsellers').click();
})
import {test,expect} from '@playwright/test';

test('Trace viewer enabling',async({page,context})=>{
   

    await page.goto('https://playwright.dev');

    await expect(page).toHaveTitle(/Playwright/);

    const getstarted = await(page).getByText('Get started');

    await expect(getstarted).toHaveAttribute('href','/docs/intro');

    await getstarted.click();

    await expect(page).toHaveURL('https://playwright.dev/docs/intro');

    


});
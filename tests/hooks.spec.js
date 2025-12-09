import {test,expect} from '@playwright/test';




test.beforeEach('Run before test',async ({page})=>{

    await page.goto('https://playwright.dev');
});

test.afterEach('Run after test',async({page})=>{
    console.log('Test ran successfully');
});



test('Hooks',async({page})=>{
    
   
    await page.goto('https://playwright.dev');

    await expect(page).toHaveTitle(/Playwright/);

    const getstarted = await(page).getByText('Get started');  

    await expect(getstarted).toHaveAttribute('href','/docs/intro');

    await getstarted.click();

    await expect(page).toHaveURL('https://playwright.dev/docs/intro');
}
);


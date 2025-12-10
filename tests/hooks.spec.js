import {test,expect} from '@playwright/test';




test.beforeEach('Run before test',async ({page})=>{

    await page.goto('https://playwright.dev');
});

test.afterEach('Run after test',async({page})=>{
    console.log('Test ran successfully');
});



test('Hooks',async({page})=>{
    
   
    
    await (page). getByRole('link', { name: 'Codegen.' }).click();
    await expect(page).toHaveURL('https://playwright.dev/docs/codegen');
    await (page).getByRole('link',{name : 'role, text and test id locators'});
    const image = await (page).getByAltText('Playwright logo');
    await expect(image).toBeTruthy();
    

  

}
);


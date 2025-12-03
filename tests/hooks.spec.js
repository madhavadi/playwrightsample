import {test,expect} from '@playwright/test';

test.beforeEach('Run before test',async ({page})=>{

    await page.goto('https://youtube.com');
});

test.afterEach('Run after test',async({page})=>{
    console.log('Test ran successfully');
});



test('Hooks',async({page})=>{
    await page.getByPlaceholder('Search').click();
    await page.getByPlaceholder('Search').fill('whistle podu csk');
    

    await expect(page.getByTitle('Search')).toBeEnabled();
    await (page).getByTitle('Search').click();

    await page.getByTitle('Official CSK #WhistlePodu Video 2018').click();
    await expect(page).toHaveURL('https://www.youtube.com/watch?v=OlGfSKcWhdA');
    
}
);

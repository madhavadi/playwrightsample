import {test,expect} from '@playwright/test';

test ('Other commands',async ({page})=>{

    await page.goto('https://automationtesting.co.uk/');
    await page.click('.toggle');
    await (page).getByText('Buttons').click();
    await expect(page).toHaveURL('https://automationtesting.co.uk/buttons.html');
    await (page).getByRole('button',{ name : 'Button One'}).click();
    await expect(page).toHaveTitle('You clicked the first button!');


});
import {test , expect} from '@playwright/test';
import { link } from 'fs';



test('Mobile test emulation',async ({page}) => {

    await page.goto('https://www.saucedemo.com/');
    const user = await (page).getByRole('textbox',{name : 'Username'});
    await user.fill('standard_user');
    await page.fill('#password','secret_sauce');
    await page.click('#login-button');

});

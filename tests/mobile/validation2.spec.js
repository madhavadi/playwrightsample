import {test,expect} from '@playwright/test';

test('Herokuapp validation',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/');
    await (page.getByText('Forgot Password')).click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/forgot_password');

    
    const email = (page.getByRole('textbox',{name : 'E-mail'}));
    await expect(email).toBeVisible();

    await email.fill('abcde123@gmail.com');
    await page.click('#form_submit');






    

    
});
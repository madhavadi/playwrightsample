import {test} from '@playwright/test';
import { Loginpage } from '../pages/Loginpage';

test ('Login test with POM',async({page}) => {

    const login = new Loginpage(page);

    await login.goto();
    await login.login('standard_user','secret_sauce');
});
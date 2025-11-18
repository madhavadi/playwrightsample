import {expect} from '@playwright/test';

export class Loginpage {
    constructor(page){
        this.page=page;
        this.usernamebox = page.locator('#user-name');
        this.passwordbox = page.locator('#password');
        this.loginbutton = page.locator('#login-button');
    }

    async goto(){
        await this.page.goto('https://www.saucedemo.com');
    }
    async login(username,password){
        await this.usernamebox.fill(username);
        await this.passwordbox.fill(password);
        await this.loginbutton.click();
    }
    };

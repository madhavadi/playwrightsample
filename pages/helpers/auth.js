const {test} = require ('@playwright/test');

const LOGIN_URL = 'https://jsonplaceholder.typicode.com/posts';
const USERNAME = 'testuser';
const PASSWORD = 'password123';

async function logingettoken(){
    console.log('Login started');

    const FAKE_TOKEN = 'MY_STATIC_TRAINING_TOKEN_123';

    console.log('Token generated');

    return FAKE_TOKEN;
}

module.exports = {logingettoken,}



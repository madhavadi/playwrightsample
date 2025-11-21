const {test,expect} = require ('@playwright/test');

const {logingettoken} = require ('../../pages/helpers/auth');

const SECURE_URL = 'https://jsonplaceholder.typicode.com/posts/1';

test('Checking reusability',async ({request}) => {
    console.log('Requesting token');
    const token = await logingettoken();

  

const response = await request.get(SECURE_URL, {
    headers: {
        
        'Authorization': `Bearer ${token}`, 
        'Accept': 'application/json'
    }

    });

    expect(response.status()).toBe(200);
    console.log('Test passed'); 

});
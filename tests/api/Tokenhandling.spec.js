import {test,expect} from '@playwright/test';

const API_TOKEN = 'madhav12345';
const SAMPLE_URL = 'https://jsonplaceholder.typicode.com/posts/1';

test('Token handling with API', async ({ request }) => {

     const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_TOKEN}`,
    };

   
    const response = await request.get(SAMPLE_URL, {
        headers: headers
    });

    
    expect(response.status()).toBe(200);

    console.log('API Response Status:', response.status());
    const responseBody = await response.json();
    console.log("Full Post Data:", responseBody); 
});
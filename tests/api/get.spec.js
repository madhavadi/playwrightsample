import { test,expect,request } from '@playwright/test';

test('Sample Get test',async ({request}) => {
    const response = await 
    request.get('https://jsonplaceholder.typicode.com/posts/1');
    expect (response.status()).toBe(200);
    const responseBody =  await response.json();
    expect (responseBody.id).toBe(1);

    
});
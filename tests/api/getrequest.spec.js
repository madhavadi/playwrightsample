import {test,expect,request} from '@playwright/test';

test('Get request trial',async ({request}) => {
    const res = await 
    request.get('https://dummyjson.com/products');
    expect(res.ok()).toBeTruthy();
    console.log(await res.json());
});

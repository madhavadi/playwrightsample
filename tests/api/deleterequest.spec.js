import {test,expect,request} from '@playwright/test';

test('Delete request',async({request}) => {
    const res = await
    request.delete('https://dummyjson.com/products/1');
    expect (res.ok()).toBeTruthy();
    console.log(await res.json());
});
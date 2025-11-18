import {test,expect,request} from '@playwright/test';
test('Post request trial',async ({request}) => {
    const res = await
     request.post('https://dummyjson.com/products/add',{
        data: {
            title : "Bat"
        }
    });

    expect (res.status()).toBe(201);
    console.log(await res.json());
});
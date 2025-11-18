const {test} = require ('@playwright/test');

test('open example.com',async ({page})=>{
    await page.goto('https://example.com');
    console.log("example.com opened");
});


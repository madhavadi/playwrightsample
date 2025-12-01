import {test,expect,_android} from '@playwright/test';;

test ('Android sample',async()=>{
    const [device] = await _android.devices();
    const context = await device.launchBrowser();
    const page = await context.newPage();
    await page.goto('https://www.saucedemo.com');
    await expect(page.locator('.login_wrapper')).toBeVisible();
    await context.close();
}
); 
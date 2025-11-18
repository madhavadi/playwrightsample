import{test,expect,request} from '@playwright/test';
test ('Put sample test',async ({request}) => {
const res = await 
request.put('https://dummyjson.com/products/1',{
    data:{
        title:"Updated title"
    }
});

expect (res.ok()).toBeTruthy();
console.log(await res.json())

});
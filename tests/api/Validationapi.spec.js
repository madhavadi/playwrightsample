import {test,expect} from '@playwright/test';
import { type } from 'os';

test('Validation test', async ({request}) => {
    const res = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    expect(res.status()).toBe(200);

    const body = await res.json();
    console.log(body);

    expect(body.id).toBe(1);
    expect(body.title).toBeDefined();

    expect(typeof body.id).toBe('number');
    expect(typeof body.title).toBe('string');

});
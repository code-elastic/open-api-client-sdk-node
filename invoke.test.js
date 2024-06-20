import OpenClient from './index.js';


const client = new OpenClient('qwert123456', 'asdfgqwertzxcvb')
await client.getNameByGet("hello1")
await client.getNameByPost('hello2')


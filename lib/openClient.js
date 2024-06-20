/**
 * @author huang
 * @date 2024-05-20
 * @File: openClient.py
 * @Description:
 */
const axios = require('axios');
const genSign = require('../utils/genSign');

class OpenClient {
    constructor(appKey, appSecret) {
        this.appKey = appKey;
        this.appSecret = appSecret;
    }

    generateSign(parameter) {
        return genSign(parameter, this.appSecret);
    }

    async getNameByGet(name) {
        try {
            // 创建 URL 并添加 Query 参数
            const baseURL = 'http://127.0.0.1:9002/api/user/get';
            const params = new URLSearchParams({ name: name });

            // 发送 GET 请求
            const response = await axios.get(`${baseURL}?${params.toString()}`);

            // 输出响应数据
            console.log(`Name: ${response.data.name}`);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async getNameByPost(name) {
        try {
            // 创建要发送的 JSON 数据
            const data = { name: name };

            // 创建 HTTP POST 请求
            const response = await axios.post('http://127.0.0.1:9002/api/user/post', data, {
                headers: {
                    'Content-Type': 'application/json',
                    'appKey': this.appKey,
                    'parameters': JSON.stringify(data),
                    'timestamp': Math.floor(Date.now() / 1000).toString(), // 设置时间戳
                    'nonce': Math.floor(Math.random() * 1000000).toString(), // 设置随机数Nonce
                    'sign': this.generateSign(JSON.stringify(data)) // 设置签名
                }
            });

            // 输出解析后的数据
            console.log(`Name: ${response.data.name}`);
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

module.exports = OpenClient;

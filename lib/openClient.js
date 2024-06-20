/**
 * @author huang
 * @date 2024-05-20
 * @File: openClient.py
 * @Description:
 */


import axios from 'axios';
import genSign from '../utils/genSign.js';

class OpenClient {
    /**
     *
     * @param appKey
     * @param appSecret
     */
    constructor(appKey, appSecret) {
        this.appKey = appKey;
        this.appSecret = appSecret;
    }

    /**
     * 请求参数
     * @param parameter
     * @returns {string}
     */
    generateSign(parameter) {
        return genSign(parameter, this.appSecret);
    }

    async getNameByGet(name) {
        try {
            const baseURL = 'http://127.0.0.1:9002/api/user/get';
            const params = new URLSearchParams({name: name});
            const response = await axios.get(`${baseURL}?${params.toString()}`);
            console.log(`Name: ${response.data.name}`);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    /**
     *
     * @param name
     * @returns {Promise<void>}
     */
    async getNameByPost(name) {
        try {
            const data = {name: name};
            const response = await axios.post('http://127.0.0.1:9002/api/user/post', data, {
                headers: {
                    'Content-Type': 'application/json',
                    'appKey': this.appKey,
                    'parameters': JSON.stringify(data),
                    'timestamp': Math.floor(Date.now() / 1000).toString(),
                    'nonce': Math.floor(Math.random() * 1000000).toString(),
                    'sign': this.generateSign(JSON.stringify(data))
                }
            });
            console.log(`Name: ${response.data.name}`);
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

export default OpenClient;

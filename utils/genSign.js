/**
 * @author huang
 * @date 2024-05-20
 * @File: genSign.py
 * @Description:
 */
const crypto = require('crypto');

function genSign(body, secretKey) {
    // 使用 md5 生成签名
    return crypto.createHash('md5').update(`${body}.${secretKey}`).digest('hex');
}

module.exports = genSign;

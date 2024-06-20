/**
 * @author huang
 * @date 2024-05-20
 * @File: genSign.py
 * @Description:
 */
import crypto from 'crypto';

function genSign(body, secretKey) {
    return crypto.createHash('md5').update(`${body}.${secretKey}`).digest('hex');
}

export default genSign;

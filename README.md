# Open API Client SDK for Node.js

Node.js SDK 应用于 open-API-client-sdk-node. 提供获取用户名信息的 GET 和 POST 方法

## 安装

使用 npm 安装

```bash
npm install @codeelastic/open-api-client-sdk-node
```

## **快速使用**

```javascript
import OpenClient from '@codeelastic/open-api-client-sdk-node';

const client = new OpenClient('yourAppKey', 'yourAppSecret');

// GET
await client.getNameByGet('exampleName');

// POST
await client.getNameByPost('exampleName');
```


# Node-CryptoJS by James Liu

## Overview

**Node-CryptoJS** is a encryption package for Node.js
[CryptoJS]

## Usage

When you `require` the module `cryptojs` you can use the latest `cryptojs` functions in your applications.

### Includes

- AES

- MD5

- SHA(1, 3, 224, 256, 384, 512)

- pbkdf2

- RC4

- ripemd160

- Rabbit(legacy)

- tripledes

- Hmac-all

## Method

### import

```
var cryptojs = require("cryptojs");
```

### use

```Javascript
// MD5
encryptedMessage1 = cryptojs.CryptoJS.MD5("message");

// SHA1
encryptedMessage2 = cryptojs.CryptoJS.SHA1("message");
```

## Credits

### [Jeff Mott](https://code.google.com/p/crypto-js/)

### [James Liu](http://jamesliu.info/)
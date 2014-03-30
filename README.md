Node-CryptoJS by James Liu
======

[![Build Status](https://travis-ci.org/jamesliu96/cryptojs.png)](https://travis-ci.org/jamesliu96/cryptojs)

Overview
------

**Node-CryptoJS** is a encryption package for Node.js
[CryptoJS]

Usage
------

When you `require` the module `cryptojs` you can use the latest `cryptojs` functions in your applications.

Includes
------

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
var cryptojs = require("cryptojs").CryptoJS;
```

### use

```Javascript
// MD5
encryptedMessage1 = cryptojs.MD5("message");

// SHA1
encryptedMessage2 = cryptojs.SHA1("message");
```
License
------

[The MIT License](http://james.mit-license.org/) (MIT)

Copyright (c) 2014 James Liu

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


Credits
------

### [James Liu](http://jamesliu.info/)

### [Jeff Mott](https://code.google.com/p/crypto-js/)

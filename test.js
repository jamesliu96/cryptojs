var cryptojs = require('./lib/cryptojs').CryptoJS;

var mod = "MD5|SHA1|SHA256|SHA512|SHA3".split('|'), i;

for (i = 0; i <= mod.length - 1; i++) {
	try {
		eval('console.log(mod[i] + " : " + cryptojs.' + mod[i] + '("Hello World!").toString());');
	}
	catch (e) {
		return 1;
	}
	return 0;
}

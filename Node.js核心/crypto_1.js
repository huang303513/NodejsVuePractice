/**
 * crypto
 * @authors 黄成都 (huang2009303513@gmail.com)
 * @date    2017-08-28 12:33:04
 * @version $Id$
 */

const crypto = require('crypto');

if (false) {
	const secret = 'abcdefg';
	const hash = crypto.createHmac('sha256', secret).update('I love cupcakes').digest('hex');
	console.log(hash);
}

const cipher = crypto.createCipher('aes192', 'a password');
let encrypted = '';
cipher.on('readable', () => {
  const data = cipher.read();
  if (data)
    encrypted += data.toString('hex');
});
cipher.on('end', () => {
  console.log(encrypted);
});
cipher.write('some clear text data');
cipher.end();

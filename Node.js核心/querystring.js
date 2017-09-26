/**
 * querystring.js
 * @authors 黄成都 (huang2009303513@gmail.com)
 * @date    2017-09-26 19:41:24
 * @version $Id$
 */

const querystring = require('querystring');

var string = "one=%e5%90%83%e9%a5%ad&two=2&three=3";
var result = querystring.parse(string, null, null,null);
console.log(result);

result = {
	one:"吃饭1",
	two:2,
	three:3
};
querystring.stringify(result, sep, eq, options);

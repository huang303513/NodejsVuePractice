/**
 * dns
 * @authors 黄成都 (huang2009303513@gmail.com)
 * @date    2017-08-28 14:16:35
 * @version $Id$
 */
const dns = require('dns');

dns.lookup("www.google.com", null, (err,address,family) =>{
	console.log('IP地址:%j 地址族:%s',address,family);
});


































/**
 * error
 * @authors 黄成都 (huang2009303513@gmail.com)
 * @date    2017-08-28 14:40:57
 * @version $Id$
 */

const fs = require('fs');

fs.readFile('./dns_1.js', null, (err,data) =>{
	if (err) {
		console.error('读取文件出错',err);
	}else{
		console.log(data.toString());
	}
});






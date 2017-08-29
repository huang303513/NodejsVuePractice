/**
 * fs
 * @authors 黄成都 (huang2009303513@gmail.com)
 * @date    2017-08-28 17:51:11
 * @version $Id$
 */

const fs = require('fs');

if (false) {
	fs.unlink('./resources/hello', (err,res)=>{
		if (err) {
			throw err;
		}
		console.log('删除成功');
	});
}

if (false) {
	fs.unlinkSync('./resources/hello');
	console.log('删除成功');
}

if (true) {
	fs.rename('./resources/hello', './resources/world', (err,res)=>{
		if (err) {
			throw err;
		}
		fs.stat('./resources/world', (err,stats)=>{
			if (err) {
				throw err;
			}
			console.log(`文件属性:${JSON.stringify(stats)}`);
		});
	});
}





































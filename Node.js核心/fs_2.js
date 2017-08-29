/**
 * fs
 * @authors 黄成都 (huang2009303513@gmail.com)
 * @date    2017-08-29 10:11:32
 * @version $Id$
 */

const fs = require('fs');

//获取一个文件的访问权限
fs.access('./resources/stderr.log', fs.constants.R_OK|fs.constants.W_OK, (err)=>{
	console.log(err?"no access":"can read/write");
});

//写入文件的正确解锁方式
fs.open('./resources/write.log', 'wx', (err,fd)=>{
	if (err) {
		if (err.code === 'EEXIST') {
			console.log('myfile already exists');
			return;
		}
		throw err;
	}
	//写入数据
	fs.writeFile('./resources/write.log', 'Hello Node.js', (err) => {
	  if (err) throw err;
	  console.log('The file has been saved!');
	});

});

//监控一个文件夹的变化
fs.watch('./resources', {encoding:'buffer'}, (eventType,filename)=>{
	if (filename) {
		console.log(filename.toString() + ":" + eventType);
	}
});

if (false) {
	fs.close();
}






















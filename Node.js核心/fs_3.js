/**
 * fs
 * @authors 黄成都 (huang2009303513@gmail.com)
 * @date    2017-08-29 10:48:33
 * @version $Id$
 */

const fs = require('fs');
const assert = require("assert");

var path = './resources/write.log';
console.log(fs.readFileSync(path, 'utf-8'));
//获取要截取文件的文件描述符
const fd = fs.openSync(path, 'r+');
//截断文件至前四个字节
fs.ftruncate(fd, 4, (err)=>{
	assert.ifError(err);
	console.log(fs.readFileSync(path, 'utf-8'));
});











































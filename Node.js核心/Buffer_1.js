/**
 * Buffer学习
 * @authors 黄成都 (huang2009303513@gmail.com)
 * @date    2017-08-25 15:45:15
 * @version $Id$
 */


var buf = Buffer.from("hello world",'utf8');
console.log(buf);
console.log(buf.toString('utf8'));
console.log(buf.toString('base64'));


buf = Buffer.from([1,2,3]);
for(const b of buf){
	console.log(b);
}


const buf1 = new Buffer('buffer');
const buf2 = new Buffer(buf1);
buf1[0] = 0x61;
console.log(buf1.toString());
console.log(buf2.toString());


const buf3 = new Buffer('this is a test');//默认是utf8
console.log(buf3.toString());

//base64的字符串转换为数据流
const buf4 = Buffer.alloc(11,'aGVsbG8gd29ybGQ=','base64');
console.log(buf4);
console.log(buf4.toString());

const buf5 = Buffer.from('1234');
const buf6 = Buffer.from('0123');
const arr = [buf5,buf6];
console.log(arr.sort(Buffer.compare));


const str = 'Node.js';
const buf7 = Buffer.allocUnsafe(str.length);
for (let i = 0; i < str.length; i++) {
  buf7[i] = str.charCodeAt(i);
}
console.log(buf7.toString('utf8'));


const buf8 = Buffer.from('this is a buffer');
console.log(buf8.indexOf('this'));
console.log(buf8.indexOf('is'));


const buf9 = Buffer.allocUnsafe(26);
for (let i = 0; i < 26; i++) {
  // 97 是 'a' 的十进制 ASCII 值 
  buf9[i] = i + 97;
}
const buf10 = buf9.slice(0, 3);
// 输出: abc
console.log(buf10.toString('ascii', 0, buf10.length));
buf9[0] = 33;
// 输出: !bc
console.log(buf10.toString('ascii', 0, buf10.length));


/**
 * net.js
 * net 模块提供了创建基于流的 TCP 或 IPC 服务器(net.createServer())和客户端(net.createConnection()) 的异步网络 API。
 * @authors 黄成都 (huang2009303513@gmail.com)
 * @date    2017-09-26 08:06:22
 * @version $Id$
 */

const net = require('net');
const server = net.createServer((socket)=>{
	socket.end('goodbye\n');
}).on('error',(err)=>{
	throw err;
});

server.listen(()=>{
	console.log('opened server on' + server.address());
});
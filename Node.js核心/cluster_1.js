/**
 * cluster
 * @authors 黄成都 (huang2009303513@gmail.com)
 * @date    2017-08-28 10:28:52
 * @version $Id$
 */

const cluster = require('cluster');
const http = require('http');
const numCPUS = require('os').cpus().length;

if (cluster.isMaster) {
	console.log(`主进程${process.pid}正在运行`);

	//衍生工作进程
	for (var i = 0; i < numCPUS; i++) {
		cluster.fork();
	}

	cluster.on('exit', (worker,code,signal) =>{
		console.log(`工作进程${worker.process.pid} 已经退出`);
	});
}else{
	//工作进程可以共享任何TCP链接
	//在本列子中，共享的是一个HTTP服务器
	http.createServer((req,res) =>{
		console.log(`进程${cluster.worker.process.pid}处理请求`);
		res.writeHead(200);
		res.end('你好,世界!\n');
	}).listen(8000);
	console.log(`工作进程${process.pid}已启动`);
}


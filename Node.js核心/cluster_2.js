/**
 * cluster
 * @authors 黄成都 (huang2009303513@gmail.com)
 * @date    2017-08-28 11:01:30
 * @version $Id$
 */

const cluster = require('cluster');
const http = require('http');

if (cluster.isMaster) {

    // 跟踪 http 请求
    let numReqs = 0;
    setInterval(() => {
        console.log(`numReqs = ${numReqs}`);
    }, 1000);

    // 计算请求数目
    function messageHandler(msg) {
        if (msg.cmd && msg.cmd === 'notifyRequest') {
            numReqs += 1;
        }
    }

    // 启动 worker 并监听包含 notifyRequest 的消息
    const numCPUs = require('os').cpus().length;
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    for (const id in cluster.workers) {
        cluster.workers[id].on('message', messageHandler);
    }

} else {

    // Worker 进程有一个http服务器
    http.Server((req, res) => {
        res.writeHead(200);
        res.end('hello world\n');

        // 通知 master 进程接收到了请求
        process.send({ cmd: 'notifyRequest' });
    }).listen(8000);
}
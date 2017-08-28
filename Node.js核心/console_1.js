/**
 * Console
 * @authors 黄成都 (huang2009303513@gmail.com)
 * @date    2017-08-28 12:02:35
 * @version $Id$
 */

const { Console } = require('console');
const fs = require('fs');

const output = fs.createWriteStream('./resources/stdout.log');
const errorOutput = fs.createWriteStream('./resources/stderr.log');
// 自定义的简单记录器
const logger = new Console(output, errorOutput);
// 像 console 一样使用
const count = 5;
logger.log('count: %d', count);




const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
  logger.log(`Server running at http://${req}:${res}/`);
});
server.listen(port, hostname, () => {
  logger.log(`Server running at http://${hostname}:${port}/`);
});



































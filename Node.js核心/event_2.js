/**
 * event
 * @authors 黄成都 (huang2009303513@gmail.com)
 * @date    2017-08-28 17:25:55
 * @version $Id$
 */

const myEmitter = new MyEmitter();

process.on('uncaughtException', (err) => {
    console.error('有错误');
});
myEmitter.emit('error', new Error('whoops!'));
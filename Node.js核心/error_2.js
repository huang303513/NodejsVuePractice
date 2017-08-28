/**
 * error
 * @authors 黄成都 (huang2009303513@gmail.com)
 * @date    2017-08-28 16:13:51
 * @version $Id$
 */

const EventEmitter = require('events');

const ee = new EventEmitter();

setImmediate((xx,yy,zz) =>{
	console.log(xx + yy + zz);
    ee.emit('error',new Error("这会奔溃"));
}, "参数1", "参数二", "参数三");















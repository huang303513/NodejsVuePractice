/**
 * events
 * @authors 黄成都 (huang2009303513@gmail.com)
 * @date    2017-08-28 17:02:20
 * @version $Id$
 */

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
}

const myEmitter = new MyEmitter();

if (false) {
	myEmitter.on('event', function(a,b){
		console.log('触发了一个事件!' + a + b,this);
	});
	myEmitter.on('event', (a,b) =>{
		setImmediate(()=>{
			console.log("这是异步发生的");
		});
	});
	myEmitter.emit('event','a','b');
}

if (true) {
	let m = 0;
	myEmitter.once('event', ()=>{
		console.log(++m);
	});
	myEmitter.emit('event');
	myEmitter.emit('event');
}


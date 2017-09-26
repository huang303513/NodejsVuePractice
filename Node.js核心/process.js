/**
 * process.js
 * @authors 黄成都 (huang2009303513@gmail.com)
 * @date    2017-09-26 16:40:52
 * @version $Id$
 */

const fs = require('fs');

process.on('uncaughtException', (err) =>{
	fs.writeSync(1, `Caught exception:${err}\n`);
	fs.writeFile('./resources/write.log', `Caught exception:${err}\n`, (err) => {
	  if (err) throw err;
	});
});
process.on('warning', (warning)=>{
	console.warn(warning.name);
	console.warn(warning.message);
	console.warn(warning.stack);
});

console.log(`Version:${process.version}`);
setTimeout(()=>{
	console.log('this will still run.');
}, 500);
nonexitSentFunc();
console.log('This will not run.');
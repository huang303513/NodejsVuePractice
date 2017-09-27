const readline = require('readline')
const fs = require('fs')

// const rl = readline.createInterface({
// 	input:process.stdin,
// 	output:process.stdout
// });
// rl.question('这是问题?',(answer)=>{
// 	console.log(`多谢你反馈：${answer}`);
// 	rl.close();
// });


const rl = readline.createInterface({
	input:fs.createReadStream('./Buffer_1.js')
});
rl.on('line',(line) =>{
	console.log(`文件的单行内容：${line}`);
})

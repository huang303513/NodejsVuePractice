/**
 * child_process
 * @authors 黄成都 (huang2009303513@gmail.com)
 * @date    2017-08-25 16:50:59
 * @version $Id$
 */

// const util = require('util');
// const exec = util.promisify(require('child_process').exec);
// async function lsExample() {
//   const { stdout, stderr } = await exec('ls');
//   console.log('stdout:', stdout);
//   console.log('stderr:', stderr);
// }
// lsExample();
// 

const { execFile } = require('child_process');
const child = execFile('node', ['--version'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});


const { spawn } = require('child_process');
//ls -lh /usr
const ls = spawn('ls', ['-lh', '/usr']);
ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});
ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});
ls.on('close', (code) => {
  console.log(`子进程退出码：${code}`);
});



//const { spawn } = require('child_process');
const grep = spawn('grep', ['ssh']);
grep.on('close', (code, signal) => {
  console.log(`子进程收到信号 ${signal} 而终止`);
});
// 发送 SIGHUP 到进程
grep.kill('SIGHUP');

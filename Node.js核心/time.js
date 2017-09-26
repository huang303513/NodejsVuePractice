/**
 * time
 * @authors 黄成都 (huang2009303513@gmail.com)
 * @date    2017-09-16 16:42:58
 * @version $Id$
 */


const util = require('util');
const setImmediatePromise = util.promisify(setImmediate);

setImmediatePromise('foobar').then((value) => {
  console.log("回调");
});

// or with async function
async function timerExample() {
  console.log('Before I/O callbacks');
  await setImmediatePromise();
  console.log('After I/O callbacks');
}
timerExample()


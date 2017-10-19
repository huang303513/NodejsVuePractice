//=============================================================
//ES6 诞生以前，异步编程的方法，大概有下面四种。//回调函数,事件监听,发布/订阅,Promise 对象。Generator 函数将 JavaScript 异步编程带入了一个全新的阶段。
/*jshint esversion: 6 */
const fs = require('fs');

const readFile = function(fileName) {
    return new Promise(function(resolve, reject) {
        fs.readFile(fileName, function(error, data) {
            console.log(data + error);
            if (error) {
                return reject(error);
            }
            resolve(data);
        });
    });
};

const gen = function*() {
    yield readFile('/etc/mail.rc');
    yield readFile('/etc/nfs.conf');
};

let ss = gen();
ss.next();
console.log("----------------------");
ss.next();
















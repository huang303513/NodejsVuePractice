//=============================================================
/*jshint esversion: 6 */
//async函数返回一个 Promise 对象，可以使用then方法添加回调函数。
//当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。
//函数前面的async关键字，表明该函数内部有异步操作。调用该函数时，会立即返回一个Promise对象。
async function timeout(ms) {
    await new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
}
asyncPrint('间隔一段时间以后打印', 2000);
//=============================================================
//async函数返回一个 Promise 对象。async函数内部return语句返回的值，会成为then方法回调函数的参数。
async function f() {
    return 'hello world';
}
f().then(v => console.log(v));
//=============================================================
//async函数内部抛出错误，会导致返回的 Promise 对象变为reject状态。抛出的错误对象会被catch方法回调函数接收到。
async function ferror() {
    throw new Error('出错了');
}
ferror().then(
    v => console.log(v),
    e => console.log(e)
);
//=============================================================
//正常情况下，await命令后面是一个 Promise 对象。如果不是，会被转成一个立即resolve的 Promise 对象。
async function fnumber() {
    return await 123;
}
fnumber().then(v => console.log(v));
//=============================================================
//只要一个await语句后面的 Promise 变为reject，那么整个async函数都会中断执行。
async function ferrtest() {
    await Promise.reject('出错了ferrtest');
    await Promise.resolve('这里不会运行');
}
ferrtest().then(v => console.log(v), e => console.log(e));
//=============================================================
//有时，我们希望即使前一个异步操作失败，也不要中断后面的异步操作。这时可以将第一个await放在try...catch结构里面，这样不管这个异步操作是否成功，第二个await都会执行。
async function ferrcatch() {
    try {
        await Promise.reject('错误catch');
    } catch (e) {

    }
    return await Promise.resolve('err catch以后继续执行');
}
ferrcatch().then(v => console.log(v));
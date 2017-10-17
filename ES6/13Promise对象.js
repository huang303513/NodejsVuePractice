//=============================================================
//所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。
//从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。
//ES6 规定，Promise对象是一个构造函数，用来生成Promise实例。
let promise = new Promise(function(resolve, reject) {
    if (true) {
        resolve("成功回调");
    } else {
        reject('失败回调');
    }
});
promise.then(function(value) {
    console.log(value);
}, function(err) {
    console.log(err);
});
//=============================================================
//加载图片
function loadImageAsync(url) {
    return new Promise(function(resolve, reject) {
        // let image = new Image();
        // image.onload = function() {
        // 	resolve(image);
        // };
        // image.onerror = function () {
        // 	reject(new  Error("加载失败"));
        // }
        // image.src = url;
        resolve("模拟成功");
    });
}
let imagePromise = loadImageAsync("http://www.baidu.com/sdfsdfas.jpg");
imagePromise.then(function(value) {
    console.log(value);
}, function(err) {
    console.log(err);
});
//=============================================================
let getJSON = function(url) {
    var promise = new Promise(function(resolve, reject) {
        // var client = new XMLHttpRequest();
        // client.open("GET", url);
        // client.onreadystatechange = handler;
        // client.responseType = "json";
        // client.setRequestHeader("Accept", "application/json");
        // client.send();

        function handler() {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        };
    });

    return promise;
};

getJSON('/post/1.png').then(
    post => getJSON(post.commentURL)
).then(
    comments => console.log('resolved:', comments),
    err => console.log("rejected:", err)
)

// getJSON("http://nodejs.cn/api/net.html").then(function(json) {
//   console.log('Contents: ' + json);
// }, function(error) {
//   console.error('出错了', error);
// });

//=============================================================
//一般总是建议，Promise 对象后面要跟catch方法，这样可以处理 Promise 内部发生的错误。
//catch方法返回的还是一个 Promise 对象，因此后面还可以接着调用then方法。
let someAsyncThing = function() {
    return new Promise(function(resolve, reject) {
        resolve(x + 2);
    });
};
someAsyncThing().then(
    value => console.log("first promise is ok", value)
).catch(
    value => console.log("first promise is bad", value)
).then(
    value => console.log('second promise is good', value)
).then(
    value => console.log('three promist is good', value)
);
//=============================================================
//Promise.all方法接受一个数组作为参数，p1、p2、p3都是 Promise 实例，如果不是，就会先调用下面讲到的Promise.resolve方法，将参数转为 Promise 实例，再进一步处理。
//Promise.all方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。）
//p的状态由p1、p2、p3决定，分成两种情况。
//1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
//2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。
const p1 = new Promise((resolve, reject) => {
        resolve('hello');
    })
    .then(result => result)
    .catch(e => e);

const p2 = new Promise((resolve, reject) => {
        throw new Error('报错了');
    })
    .then(result => result)
    .catch(e => e);

Promise.all([p1, p2])
    .then(result => console.log(result))
    .catch(e => console.log(e));
//=============================================================
//Promise.race方法的参数与Promise.all方法一样，如果不是 Promise 实例，
//就会先调用下面讲到的Promise.resolve方法，将参数转为 Promise 实例，再进一步处理。
const p = Promise.race([
    getJSON('/resource-that-may-take-a-while'),
    new Promise(function(resolve, reject) {
        setTimeout(() => reject(new Error('request timeout')), 5000)
    })
]);
p.then(response => console.log(response));
p.catch(error => console.log(error));
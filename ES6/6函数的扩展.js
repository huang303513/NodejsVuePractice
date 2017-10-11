//=============================================================
//函数参数有默认值
function logOld(x, y) {
    y = y || "default";
    console.log(x, y);
}

function log(x, y = 'World') {
    console.log(x, y);
}
log('Hello', '');
logOld('Hello', '');
//=============================================================
function foo({ x, y = 5 }) {
    console.log(x, y);
}
foo({ x: 1 });

function fetch(url, { body = '', method = 'GET', headers = {} } = {}) {
    console.log(method, url, body, headers);
}
fetch('http://example.com')
//=============================================================
//默认参数的作用域
let x = 1;

function f(x, y = x) {
    console.log(y);
}
f(2);
//=============================================================
function add(...values) {
    let sum = 0;
    for (var val of values) {
        sum += val;
    }
    console.log(sum);
    return sum;
}
add(2, 5, 3);
//=============================================================
function foo1() {

}
console.log(foo1.name);
//=============================================================
//箭头函数
let f0 = v => v + 1;
console.log(f0(2));
let f1 = () => 5;
console.log(f1());
let f2 = (num1, num2) => num1 + num2;
console.log(f2(3, 4));
let f3 = id => ({ id: id, name: "Temp" });
console.log(f3('test'));
console.log([1, 2, 3].map(x => x * x));
//=============================================================
const headAndTail = (head, ...tail) => [head, tail];
console.log(headAndTail(1, 2, 3, 4, 5));
//=============================================================
//箭头函数的上下文(this)总是指向函数定义的时候的上下文，普通函数指向的是函数调用的时候的上下文
var handler = {
    id: '123456',
    init: function() {
        document.addEventListener('click', event => this.doSomething(event.type), false);
    },
    doSomething: function(type) {
        console.log('Handing ' + type + ' for ' + this.id);
    }
}
//=============================================================
//箭头函数绑定,下面两个相等。
foo: bar; //左边对象，右边函数
bar.bind(foo);
//下面两个相等。
foo::bar(...arguments);
bar.apply(foo, arguments);
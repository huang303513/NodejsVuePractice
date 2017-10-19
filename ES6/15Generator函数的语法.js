//=============================================================
//Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同。
//Generator 函数有多种理解角度。从语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。
//执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。
/*jshint esversion: 6 */

function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}
let hw = helloWorldGenerator();
for (let item of hw) {
    console.log(item + "sdf");
}
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
//=============================================================
//yield表达式只能用在 Generator 函数里面，用在其他地方都会报错。
console.log("==============flat===============");
let arr = [1, [
        [2, 3],
        4
    ],
    [5, 6]
];
var flat = function*(a) {
    var length = a.length;
    for (var i = 0; i < length; i++) {
        var item = arr[i];
        if (typeof item != 'number') {
            yield* flat(item)
        } else {
            yield item;
        }
    }
};
// for (var f of flat(arr)) {
//     console.log(f);
// }
//=============================================================
//由于 Generator 函数就是遍历器生成函数，因此可以把 Generator 赋值给对象的Symbol.iterator属性，从而使得该对象具有 Iterator 接口。
let myIterable = {};
myIterable[Symbol.iterator] = function*() {
    yield 1;
    yield 2;
    yield 3;
};
console.log(...myIterable);
//=============================================================
console.log("==============foo===============");
//for...of循环可以自动遍历 Generator 函数时生成的Iterator对象，且此时不再需要调用next方法。
function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
}
for (let v of foo()) {
    console.log(v);
}
//=============================================================
function* objectEntries(obj) {
    let propKeys = Reflect.ownKeys(obj);
    for (let propKey of propKeys) {
        yield [propKey, obj[propKey]];
    }
}
let jame = { first: 'Jane', last: 'Doe' };
for (let [key, value] of objectEntries(jame)) {
    console.log(`first:${key},last:${value}`);
}
//=============================================================
//除了for...of循环以外，扩展运算符（...）、解构赋值和Array.from方法内部调用的，都是遍历器接口。
//这意味着，它们都可以将 Generator 函数返回的 Iterator 对象，作为参数。
function* numbers() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}
console.log(...numbers());
//=============================================================
//Generator 函数返回的遍历器对象，还有一个return方法，可以返回给定的值，并且终结遍历 Generator 函数。
console.log("==============gen===============");

function* gen() {
    yield 1;
    yield 2;
    yield 3;
}
var g = gen();
console.log(g.next());
console.log(g.return('foo'));
console.log(g.next());
//=============================================================
//next()、throw()、return()这三个方法本质上是同一件事，可以放在一起理解。
//它们的作用都是让 Generator 函数恢复执行，并且使用不同的语句替换yield表达式。
function* inner() {
    yield 'hello!';
}

function* outer1() {
    yield 'open';
    yield inner();
    yield 'close';
}
var gen = outer1();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

function* outer2() {
    yield 'open'
    yield* inner()
    yield 'close'
}
gen = outer2();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
//=============================================================
//Generator 函数总是返回一个遍历器，ES6 规定这个遍历器是 Generator 函数的实例，也继承了 Generator 函数的prototype对象上的方法。
function* g() {}

// g.prototype.hello = function() {
//     return 'hi!';
// };

// let obj = g();
// console.log(obj instanceof g);
// console.log(obj.hello());
//=============================================================
//JavaScript 原有的表示“集合”的数据结构，主要是数组（Array）和对象（Object），ES6 又添加了Map和Set。
//这样就有了四种数据集合，用户还可以组合使用它们，定义自己的数据结构，比如数组的成员是Map，Map的成员是对象。这样就需要一种统一的接口机制，来处理所有不同的数据结构。
//遍历器（Iterator）就是这样一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。
//任何数据结构只要部署Iterator接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。
//Iterator 的作用有三个：一是为各种数据结构，提供一个统一的、简便的访问接口；二是使得数据结构的成员能够按某种次序排列；
//三是ES6创造了一种新的遍历命令for...of循环，Iterator接口主要供for...of消费。
//凡是部署了Symbol.iterator属性的数据结构，就称为部署了遍历器接口。调用这个接口，就会返回一个遍历器对象。
//原生具备 Iterator 接口的数据结构如下。Array,Map,Set,String,TypedArray,函数的 arguments 对象,NodeList 对象
/*jshint esversion: 6 */

let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
//=============================================================
//新建一个类实现了Iterator接口
class RangeIterator {
    constructor(start, stop) {
            this.value = start;
            this.stop = stop;
        }
        [Symbol.iterator]() {
            return this;
        }
    next() {
        let value = this.value;
        if (value < this.stop) {
            this.value++;
            return {
                done: false,
                value: value
            };
        }
        return {
            done: true,
            value: undefined
        };
    }
}

function range(start, stop) {
    return new RangeIterator(0, 3);
}
for (let value of range(0, 3)) {
    console.log(value);
}

//=============================================================
console.log("=====================Obj=========================");

function Obj(value) {
    this.value = value;
    this.next = null;
}
Obj.prototype[Symbol.iterator] = function() {
    let iterator = {
        next: next
    };
    let current = this;

    function next() {
        if (current) {
            let value = current.value;
            current = current.next;
            return {
                done: false,
                value: value
            };
        } else {
            return {
                done: true
            };
        }
    }
    return iterator;
}
let one = new Obj(1);
let two = new Obj(2);
let three = new Obj(3);
one.next = two;
two.next = three;
for (let i of one) {
    console.log(i);
}
//=============================================================
console.log("=====================iterable=========================");
let iterable = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
    [Symbol.iterator]: Array.prototype[Symbol.iterator]
};
for (let item of iterable) {
    console.log(item);
}
//=============================================================
console.log("=====================generator=========================");
let generator = function*() {
    yield 1;
    yield*[2, 3, 4];
    yield 5;
}
let iterator = generator();
for (let item of iterator) {
    console.log(item);
}
//=============================================================
console.log("=====================myIterable=========================");
let myIterable = {};
myIterable[Symbol.iterator] = function*() {
    yield 1;
    yield 2;
    yield 3;
};
console.log(...myIterable);
//=============================================================
//=============================================================
//=============================================================
//=============================================================
//=============================================================
//=============================================================
//=============================================================
//=============================================================
//ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。
//它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。
let s = Symbol();
let s1 = Symbol('这是测试');
console.log(typeof s);
console.log(s1);
//=============================================================
let mySymbol = Symbol();
// 第一种写法
let a1 = {};
a1[mySymbol] = 'Hello!';
// 第二种写法
let a2 = {
    [mySymbol]: 'Hello!'
};
// 第三种写法
let a3 = {};
Object.defineProperty(a3, mySymbol, { value: 'Hello!' });
// 以上写法都得到同样结果
console.log(a3[mySymbol]);
//=============================================================
//在对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中。
let s2 = Symbol();
let obj = {
    [s2]: function(arg) {
        console.log(arg);
    }
}
obj[s2](123);
//=============================================================
const shapeType = {
    triangle: Symbol()
};

function getArea(shape, options) {
    let area = 0;
    switch (shape) {
        case shapeType.triangle:
            area = .5 * options.width * options.height;
            break;
        default:
            break;
    }
    return area;
}
console.log(getArea(shapeType.triangle, { width: 100, height: 100 }));
//=============================================================
const obj2 = {};
let foo = Symbol('foo');
Object.defineProperty(obj2, foo, {
    value: 'foobar'
});
for (let i in obj2) {
    console.log(i);
}
console.log(Object.getOwnPropertyNames(obj2));
console.log(Object.getOwnPropertySymbols(obj2));
//=============================================================
let obj3 = {
    [Symbol('my_key')]: 1,
    enum: 2,
    nonEnum: 3
};
console.log(Reflect.ownKeys(obj3));
//=============================================================
let for1 = Symbol.for('foo');
let for2 = Symbol.for('foo');
console.log(for1 == for2);
console.log(Symbol.keyFor(for1));
//=============================================================
//单列模式
const FOO_KEY = Symbol.for('foo');

function A() {
    this.foo = 'hello';
}
if (!global[FOO_KEY]) {
    global[FOO_KEY] = new A();
}
module.exports = global[FOO_KEY];
//=============================================================
//foo instanceof Foo在语言内部，实际调用的是Foo[Symbol.hasInstance](foo)
class Even {
    static[Symbol.hasInstance](obj) {
        return Number(obj) % 2 === 0;
    }
}
console.log(1 instanceof Even);
console.log(2 instanceof Even);
//=============================================================
//对象的Symbol.species属性，指向当前对象的构造函数。创造实例时，默认会调用这个方法，即使用这个属性返回的函数当作构造函数，来创造新的实例对象。
class MyArray extends Array {
    static get[Symbol.species]() { return Array; }
}
let myarray1 = new MyArray(1, 2, 3);
let mapped = myarray1.map(x => x * x);
console.log('==========MyArray=================')
console.log(myarray1 instanceof MyArray);
console.log(myarray1 instanceof Array);
console.log(mapped instanceof MyArray);
console.log(mapped instanceof Array);
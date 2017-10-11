//=============================================================
let birth = '2000/01/01';
const Person = {
    name: '张三',
    //等同于birth: birth
    birth,
    // 等同于hello: function ()...
    hello() {
        console.log('我的名字是', this.name);
    }
};
//=============================================================
//属性的赋值器（setter）和取值器（getter）
const cart = {
    _wheels: 4,
    get wheels() {
        return this._wheels;
    },
    set wheels(value) {
        console.log(value);
        if (value < this._wheels) {
            throw new Error('数值太小');
        }
        this._wheels = value;
    }
}
cart.wheels = 5;
//=============================================================
let propKey = 'foo';

let obj = {
    [propKey]: true,
    ['a' + 'bc']: 123
};
//=============================================================
//函数的name属性
const person = {
    sayName() {
        console.log('hello');
    }
}
console.log(person.sayName.name);
//=============================================================
console.log(Object.is('foo', 'foo'));
console.log(Object.is({}, {}));
//=============================================================
//Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）
const target = { a: 1, b: 4 };
const source1 = { b: 2 };
const source2 = { c: 3 };
Object.assign(target, source1, source2);
console.log(target);
//=============================================================
const v1 = 'abc';
const v2 = true;
const v3 = 10;
const obj0 = Object.assign({}, v1, v2, v3);
console.log(obj0);
//=============================================================
//Object.assign是浅拷贝
const obj1 = { a: { b: 1 } };
const obj2 = Object.assign({}, obj1);
obj1.a.b = 2;
console.log(obj1.a.b);
//=============================================================
//给对象添加属性和方法
class Point {
    constructor(x, y) {
        Object.assign(this, { x, y });
    }
}
Object.assign(Point.prototype, {
    someMethod(arg1, arg2) {},
    anotherMethod() {}
});
//=============================================================
//克隆一个对象，包括继承属性
function clone(origin) {
    let originProto = Object.getPrototypeOf(origin);
    return Object.assing(Object.create(originProto), origin);
}
//=============================================================
//合并多个对象
const merge = (...sources) => { Object.assign({}, ...sources) };
//=============================================================
let obj3 = { foo: 123 };
console.log(Object.getOwnPropertyDescriptor(obj3, 'foo'));
//=============================================================
//ES6 规定，所有 Class 的原型的方法都是不可枚举的。
console.log(Object.getOwnPropertyDescriptor(class { foo() {} }.prototype, 'foo').enumerable);
//=============================================================
//ES6新增方法
const obj4 = {
    foo: 123,
    get bar() { return 'abc' }
}
console.log(Object.getOwnPropertyDescriptors(obj4));
//=============================================================
//手动实现上面那个方法
function getOwnPropertyDescriptors(obj) {
    const result = {};
    for (let key of Reflect.ownKeys(obj)) {
        result[key] = Object.getOwnPropertyDescriptor(obj, key);
    }
    return result;
}
console.log('----------', getOwnPropertyDescriptors(obj4));
//=============================================================
//__proto__属性（前后各两个下划线），用来读取或设置当前对象的prototype对象
//__proto__调用的是Object.prototype.__proto__，具体实现如下。
function isObject(value) {
    return Object(value) === value;
}
Object.defineProperty(Object.prototype, '__proto__', {
    get() {
        let _thisObj = Object(this);
        return Object.getPrototypeOf(_thisObj);
    },
    set(proto) {
        if (this === undefined || this == -null) {
            throw new TypeError();
        }
        if (!isObject(this)) {
            return undefined;
        }
        if (!isObject(proto)) {
            return undefined;
        }
        let status = Reflect.setPrototypeOf(this, proto);
        if (!status) {
            throw new TypeError();
        }
    }
});
//=============================================================
//Object.setPrototypeOf方法的作用与__proto__相同，用来设置一个对象的prototype对象，返回参数对象本身。
let proto = {};
let obj5 = { x: 10 };
Object.setPrototypeOf(obj5, proto);
proto.y = 20;
proto.z = 40;
console.log(obj5.x, obj5.y, obj5.z);
//=============================================================
//Object.getPrototypeOf方法用于读取一个对象的原型对象。
function Rectangle() {}
const rec = new Rectangle();
console.log(Object.getPrototypeOf(rec) === Rectangle.prototype);
Object.setPrototypeOf(rec, Object.prototype);
console.log(Object.getPrototypeOf(rec) === Rectangle.prototype);
//=============================================================
//super关键字总是指向对象的原型
const proto1 = {
    foo: 'hello'
};
const obj6 = {
    find() {
        return super.foo;
    }
}
Object.setPrototypeOf(obj6, proto1);
console.log(obj6.find());
//=============================================================
//ES2017 引入了跟Object.keys配套的Object.values和Object.entries，作为遍历一个对象的补充手段，供for...of循环使用。
let { keys, values, entries } = Object;
let obj7 = { a: 1, b: 2, c: 3 };
for (let key of keys(obj7)) {
    console.log(key);
}
for (let value of values(obj7)) {
    console.log(value);
}
for (let [key, value] of entries(obj7)) {
    console.log([key, value]);
}
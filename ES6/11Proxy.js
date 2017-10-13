//=============================================================
//Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”。
//Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。
//这里其实是Proxy重载了.运算符
let proxyObj = new Proxy({}, {
    get: function(target, key, receiver) {
        console.log(`getting ${key}!`);
        return Reflect.get(target, key, receiver);
    },
    set: function(target, key, value, receiver) {
        console.log(`setting ${key}!`);
        return Reflect.set(target, key, value, receiver);
    }
})
proxyObj.count = 1;
++proxyObj.count;
//=============================================================
//Proxy 实例也可以作为其他对象的原型对象。
//proxy对象是obj对象的原型，obj对象本身并没有time属性，所以根据原型链，会在proxy对象上读取该属性，导致被拦截。
var proxy = new Proxy({}, {
    get: function(target, property) {
        return 35;
    }
});
let obj = Object.create(proxy);
console.log(obj.time, obj.name, obj.age);
//=============================================================
//使用get拦截，实现数组读取负数的索引。
function createArray(...elements) {
    let handler = {
        get(target, propKey, receiver) {
            let index = Number(propKey);
            if (index < 0) {
                propKey = String(target.length + index);
            }
            return Reflect.get(target, propKey, receiver);
        }
    };
    let target = [];
    target.push(...elements);
    return new Proxy(target, handler);
}
let arr = createArray('a', 'b', 'c');
console.log(arr[-1]);
//=============================================================
//apply方法拦截函数的调用、call和apply操作。
let twice = {
    apply(target, ctx, args) {
        return Reflect.apply(...arguments) * 2;
    }
};

function sum(left, right) {
    return left + right;
}
let sumProxy = new Proxy(sum, twice);
console.log(sumProxy(1, 2));
console.log(sumProxy.call(null, 4, 5));
console.log(sumProxy.apply(null, [7, 8]));
//=============================================================
var handlerHas = {
    has(target, key) {
        if (key[0] == '_') {
            return false;
        }
        return key in target;
    }
};
var targetHas = { _prop: 'foo', prop: 'foo' };
var proxyHas = new Proxy(targetHas, handlerHas);
console.log('_prop' in proxyHas);
console.log('prop' in proxyHas);

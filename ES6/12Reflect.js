//=============================================================
//将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上。
//现阶段，某些方法同时在Object和Reflect对象上部署，未来的新方法将只部署在Reflect对象上。也就是说，从Reflect对象上可以拿到语言内部的方法。
console.log('assign' in Object);
console.log(Reflect.has(Object, 'assign'));
//=============================================================
//Proxy配合Reflect使用。保证正确的使用内部方法
let loggedObj = new Proxy({}, {
    get(target, name) {
        console.log('get', target, name);
        return Reflect.get(target, name);
    },
    deleteProperty(target, name) {
        console.log('deleteProperty', target, name);
        return Reflect.deleteProperty(target, name);
    },
    has(target, name) {
        console.log('has', target, name);
        return Reflect.has(target, name);
    }
});
loggedObj.name = 'huang';
console.log(loggedObj.name);
console.log('name' in loggedObj);
//=============================================================
var myObject = {
    foo: 1,
    bar: 2,
    get baz() {
        return this.foo + this.bar;
    }
};
var myReceiverObject = {
    foo: 4,
    bar: 4
}
console.log(Reflect.get(myObject, 'baz', myReceiverObject));
Reflect.set(myObject, 'foo', 8);
console.log(myObject.foo);
Reflect.set(myObject, 'foo', 9, myReceiverObject);
console.log(myObject.foo, myReceiverObject.foo);
//=============================================================
function Greeting(name) {
    this.name = name;
}
let instance = new Greeting('张三');
instance = Reflect.construct(Greeting, ['张三']);
//=============================================================
let ages = [11, 33, 12, 54, 18, 96];
let youngest = Math.min.apply(Math, ages);
console.log(youngest);
youngest = Reflect.apply(Math.max, Math, ages);
console.log(youngest)
//=============================================================
//Reflect.preventExtensions对应Object.preventExtensions方法，用于让一个对象变为不可扩展。
console.log("=======================Extension======================");
let objExtension = {};
console.log(Reflect.isExtensible(objExtension));
Reflect.preventExtensions(objExtension);
console.log(Reflect.isExtensible(objExtension));

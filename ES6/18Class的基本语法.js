//=============================================================
/*jshint esversion: 6 */
function PointES5(x, y) {
    this.x = x;
    this.y = y;
}
PointES5.prototype.toString = function() {
    return '(' + this.x + ',' + this.y + ")";
}
class PointES6 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ',' + this.y + ")";
    }
}
let pointES5 = new PointES5(1, 2);
console.log(pointES5.toString());
let pointES6 = new PointES6(3, 4);
console.log(pointES6.toString());
console.log("===========采用 ES5 的写法，toString方法就是可枚举的。=============");
console.log(Object.keys(PointES5.prototype));
console.log(Object.getOwnPropertyNames(PointES5.prototype));
console.log(Object.keys(PointES6.prototype));
console.log(Object.getOwnPropertyNames(PointES6.prototype));
console.log("====toString方法是Point类内部定义的方法，它是不可枚举的。这一点与 ES5 的行为不一致。=======");
//=============================================================
//由于类的方法都定义在prototype对象上面，所以类的新方法可以添加在prototype对象上面。Object.assign方法可以很方便地一次向类添加多个方法。
class PointTest {
    constructor() {

    }
}
Object.assign(PointTest.prototype, {
    toString() {

    },
    toValue() {
        console.log("呵呵呵呵呵");
    }
});
let pointTest = new PointTest();
pointTest.toValue();
//=============================================================
//constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。
//一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。
class Foo {
    constructor() {
        return Object.create(null);
    }
}
console.log(new Foo() instanceof Foo);
//=============================================================
//与 ES5 一样，实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）。
console.log('=====================PointProto=====================');
class PointProto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return "(" + this.x + ", " + this.y + ")";
    }
}
var pointProto = new PointProto(1, 2);
console.log(pointProto.toString());
console.log(pointProto.hasOwnProperty('x'));
console.log(pointProto.hasOwnProperty('y'));
console.log(pointProto.hasOwnProperty('toString'));
console.log(pointProto.__proto__.hasOwnProperty('toString'));
//=============================================================
//下面代码使用表达式定义了一个类。
//需要注意的是，这个类的名字是MyClass而不是Me，Me只在 Class 的内部代码可用，指代当前类。
const MyClass = class Me {
    getClassName() {
        return Me.name;
    }
};
let inst = new MyClass();
console.log(inst.getClassName());
console.log(inst.name);
//=============================================================
class MyGetSet {
    constructor() {

    }
    get prop() {
        console.log('getter');
        return 'getter';
    }
    set prop(value) {
        console.log('setter:' + value);
    }
}
let insGetSet = new MyGetSet();
insGetSet.prop = 123;
insGetSet.prop;
//=============================================================
console.log('=====================MyGenerator=====================');
class MyGenerator {
    constructor(...args) {
        this.args = args;
    } * [Symbol.iterator]() {
        for (let arg of this.args) {
            yield arg;
        }
    }
}
for (let x of new MyGenerator('hello', 'world')) {
    console.log(x);
}
//=============================================================
//类相当于实例的原型，所有在类中定义的方法，都会被实例继承。
//如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
class MyStatic {
    static classMethod() {
        return 'hello';
    }
}
console.log(MyStatic.classMethod());
//=============================================================
//如果静态方法包含this关键字，这个this指的是类，而不是实例。
console.log("=========================MyStaticCall=============");
class MyStaticCall {
    static bar() {
        this.baz();
    }
    static baz() {
        console.log('class call');
        return "super";
    }
    bar() {
        console.log('instance call');
        return "super";
    }
}
MyStaticCall.bar();
//=============================================================
//父类的静态方法，可以被子类继承。
console.log('============MyStaticSun=============');
class MyStaticSun extends MyStaticCall {}
MyStaticSun.bar();
//=============================================================
//静态方法也是可以从super对象上调用的
class MyStaticSunTwo extends MyStaticCall {
    static bar() {
        return super.bar() + ",sunadd.";
    }
}
console.log(MyStaticSunTwo.bar());
//=============================================================
//静态属性指的是 Class 本身的属性，即Class.propName，而不是定义在实例对象（this）上的属性。
//只有这种写法可行，因为 ES6 明确规定，Class 内部只有静态方法，没有静态属性。
class StaticProp {
    // myProp = 42;
    constructor() {
        this.myProp = 123;
        console.log(this.myProp);
    }
}
StaticProp.prop = 1;
console.log(StaticProp.prop);
new StaticProp();
//=============================================================
class Rectangle {
    constructor(length, width) {
        console.log(new.target === Rectangle);
        this.length = length;
        this.width = width;
    }
}
var obj = new Rectangle(3, 4);
/*jshint esversion: 6 */
//=============================================================
//子类必须在constructor方法中调用super方法，否则新建实例时会报错。
//这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return this.x + " " + this.y;
    }
}
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    toString() {
        return this.color + " " + super.toString();
    }
}
let colorPoint = new ColorPoint(1, 2, "red");
console.log(colorPoint.toString());
//=============================================================
//Object.getPrototypeOf方法可以用来从子类上获取父类。
//因此，可以使用这个方法判断，一个类是否继承了另一个类。
console.log(Object.getPrototypeOf(ColorPoint) === Point);
//=============================================================
//super虽然代表了父类A的构造函数，但是返回的是子类B的实例，即super内部的this指的是B，因此super()在这里相当于A.prototype.constructor.call(this)。
console.log("==================A=B==============");
class A {
    constructor() {
        console.log(new.target.name);
    }
}
class B extends A {
    constructor() {
        super();
    }
}
new A();
new B();
//=============================================================
//=============================================================
//=============================================================
//=============================================================
//=============================================================
//=============================================================
//=============================================================
//=============================================================
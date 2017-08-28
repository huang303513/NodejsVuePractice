const assert = require("assert");

const obj1 = {
    a: {
        b: 1
    }
};

const obj2 = {
    a: {
        b: 2
    }
};

const obj3 = {
    a: {
        b: 1
    }
};

const obj4 = Object.create(obj1);



//第三个参数可以不定义
assert.deepEqual(obj1, obj3, "obj1和obj3不相等");
//下面两个都不会运行通过
if (false) {
    assert.deepEqual(obj1, obj4, "obj1和obj4不相等");
    assert.deepEqual(obj1, obj2, "如果两个对象不相等，则会打印出这段错误信息");
}
//============================================
assert.deepEqual({ a: 1 }, { a: "1" }, "这里可以运行通过,因为对属性做==比较");
if (false) {
    assert.deepStrictEqual({ a: 1 }, { a: "1" }, "这里运行不能通过,因为对属性做===比较");
}
//下面三个对象都没有自己的属性
const date = new Date();
const object = {};
const fakeData = {};
//设置property
Object.setPrototypeOf(fakeData, Date.prototype);
assert.deepEqual(fakeData, date, "比较能通过，因为prototype不用比较");
if (false) {
    assert.deepStrictEqual(fakeData, object, "不能通过，因为需要比较prototype，而且类型不同。不能通过");
}
//============================================
if (false) {
	assert.doesNotThrow(() =>{
		console.log("呵呵");
		throw new TypeError("Wrong value");
	}, SyntaxError, "抛出的error类型和第二个参数的error类型不一样,抛出异常");
}
if (false) {
	assert.doesNotThrow(() =>{
		console.log("呵呵");
		throw new TypeError("Wrong value");
	}, TypeError, "抛出的error类型和第二个参数的error类型一样,一个AssertionError会抛出");	
}
//============================================
assert.equal("1", 1, "因为是通过==来判断的，所以能运行通过");
if (false) {
	assert.equal({ a: { b: 1 } }, { a: { b: 1 } },"因为两个a的值不相等,所以运行不通过");
}
//===========================================
function stackStartFunction() {
	assert.fail(1, 1, "直接断言失败，并且显示这个消息", '==', stackStartFunction);
}
if (false) {
	stackStartFunction();
}

//===============================
//当参数参数为false的时候，运行通过。否则运行不通过。
assert.ifError(0);
if (false) {
	assert.ifError(1);
	assert.ifError(new Error());
}
assert.ok(true, "值是true");
if (false) {
	assert.ok(false, "值是false");
	assert.ok(0, "值是false");
}




//=============================================================
let [a,b,c] = [1,2,3];
console.log(a+b+c);
let [head, ...tail] = [1, 2, 3, 4];
console.log(head + ":"+ tail);
//默认值
let [x, y='b'] = ['a',undefined];
console.log(x + y);
//对象解构
let {foo,bar} = {foo:"aaa",bar:"bbb"};
console.log(foo + bar);
//定义变量baz,他的值是foo的值
let { foo1: baz } = { foo1: "aaa1", bar: "bbb" };
console.log(baz + "foo1未定义");
//嵌套
const node = {
  loc: {
    start: {
      line: 1,
      column: 5
    }
  }
};
let { loc, loc: { start }, loc: { start: { line }} } = node;
console.log(JSON.stringify(loc) + "   " + start.toString() + "    " + line);
//字符串解构
const [a1,b1,c1,d,e] = 'hello';
console.log(a1 + " " + b1 + " " + c1 + " " + d + " " + e);
//获取属性
let {length:len} = 'hello';
console.log(len)
//=============================================================
//解构对象是函数
function add([x,y]) {
	return x + y;
}
console.log(add([1,2]));
//=============================================================
let result = [[1,2],[3,4]].map(([a,b]) => a + b)
console.log(result);
//=============================================================
let x1 = 1;
let y1 = 2;
[x1, y1] = [y1, x1];
console.log(x1 + y1);
//=============================================================
const map = new Map();
map.set('first','hello');
map.set('second','world');
for(let [key,value] of map){
	console.log(key + " is " + value);
}

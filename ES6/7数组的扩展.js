//=============================================================
console.log(...[1, 2, 3]);

function add(x, y) {
    return x + y;
}
const numbers = [4, 38];
console.log(add(...numbers));

function f(v, w, x, y, z) {
    console.log(arguments);
}
const args = [0, 1];
f(-1, ...args, 2, ...[3]);
//=============================================================
//代替apply的写法
console.log(Math.max.apply(null, [14, 3, 77]));
console.log(Math.max(...[14, 3, 77]));
// ES5
new(Date.bind.apply(Date, [null, 2015, 1, 1]))
// ES6
new Date(...[2015, 1, 1]);
//=============================================================
//克隆数组
const a1 = [1, 2];
const a2 = [...a1];
const [...a3] = a1;
console.log(a2, a3);
//=============================================================
//合并数组
let more = [3];
let origin = [1, 2];
let es5concat = origin.concat(more);
let es6concat = [...origin, ...more];
console.log(es5concat, es6concat);
//=============================================================
//与解构赋值配合使用
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first, rest);
//=============================================================
//实现Iterator接口的对象
let map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three']
]);
let arr = [...map.keys()];
console.log(arr);
//=============================================================
//from方法把类似数组的对象和可遍历的对象转换为数组
//类似数组的对象，本质特征只有一点，即必须有length属性。因此，任何有length属性的对象，都可以通过Array.from方法转为数组。
let arrayLike = {
    '0': 'a',
    '1': 'b',
    "2": "c",
    length: 3
};
let arr1 = [].slice.call(arrayLike);
let arr2 = Array.from(arrayLike);
console.log(arr1, arr2);
//=============================================================
console.log(Array.from([1, 2, 3], (x) => x * x))
//=============================================================
//将一组值转换为数组
let array = Array.of(3, 11, 8);
console.log(array);
//=============================================================
console.log([1, 4, -5, 10].find((n) => n < 0));
//=============================================================
console.log(new Array(3).fill(7))
//=============================================================
let ab = ['a', 'b'];
for (let index of ab.keys()) {
    console.log(index);
}
// for (let elem of ab.values()) {
// 	console.log(elem);
// }
for (let [index, elem] of ab.entries()) {
    console.log(index, elem);
}
//=============================================================
console.log([1, 2, 3].includes(3));
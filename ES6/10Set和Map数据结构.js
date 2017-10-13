//=============================================================
//ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。Set 本身是一个构造函数，用来生成 Set 数据结构。
const s = new Set();
[2, 3, 4, 5, 3, 4, 1, 32, 3].forEach(x => s.add(x));
console.log(s);
const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
console.log(items.size);
//=============================================================
// 去除数组的重复成员
let arr = [3, 5, 2, 2, 5, 5];
let unique = [...new Set(arr)];
console.log(unique);
//=============================================================
console.log('======================keys,values,entries===============');
let set = new Set(['red', 'green', 'blue']);
for (let item of set.keys()) {
    console.log(item);
}
for (let item of set.values()) {
    console.log(item);
}
for (let item of set.entries()) {
    console.log(item);
}
//=============================================================
console.log(Set.prototype[Symbol.iterator] === Set.prototype.values)
//=============================================================
//并集、交集、差集
console.log('======================union,intersect,difference===============');
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
let union = new Set([...a, ...b]);
console.log(union);
let intersect = [...a].filter(x => b.has(x));
console.log(intersect);
let difference = [...a].filter(x => !b.has(x));
console.log(difference);
//=============================================================
const aarray = [
    [1, 2],
    [3, 4]
];
const ws = new WeakSet(aarray);
console.log(ws);
//=============================================================
//JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。
console.log("==============================map============================");
const m = new Map();
const o = { p: 'hello world' };
m.set(o, 'content');
console.log(m.get(o));
console.log(m.has(o))
//=============================================================
const map = new Map([
    ['name', '张三'],
    ['title', 'Auther']
]);
console.log(map.size)
console.log(map.get('name'));
//=============================================================
//只有对同一个对象的引用，Map 结构才将其视为同一个键。这一点要非常小心。
const map1 = new Map();
map1.set(['a'], 555);
map1.set('a', 'a').set('b', 'b');
console.log(map1.get(['a']));
//=============================================================
for (let item of map.entries()) {
    console.log(item[0], item[1]);
}
//=============================================================
console.log(map1[Symbol.iterator] === map.entries)
//=============================================================
const map0 = new Map().set(1, 'a').set(2, 'b').set(3, 'c');
const map0result = new Map([...map0].filter(([k, v]) => k < 3));
console.log(map0result);
console.log(map0);
//=============================================================
//Map转对象
function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k, v] of strMap) {
        obj[k] = v;
    }
    return obj;
}
const myMap = new Map().set('yes', true).set('no', false);
let obj = strMapToObj(myMap);
console.log(myMap);

function objToStrMap(obj) {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
        strMap.set(k, obj[k]);
    }
    return strMap;
}
objToStrMap({ yes: true, no: false })
//=============================================================
//Map 转为 JSON 要区分两种情况。一种情况是，Map 的键名都是字符串，这时可以选择转为对象 JSON。
function strMapToJson(strMap) {
    return JSON.stringify(strMapToObj(strMap));
}
let myMap2 = new Map().set('yes', true).set('no', false);
strMapToJson(myMap2)

function mapToArrayJson(map) {
    return JSON.stringify([...map]);
}
let myMap3 = new Map().set(true, 7).set({ foo: 3 }, ['abc']);
let myMap3json = mapToArrayJson(myMap3);
console.log(myMap3json);

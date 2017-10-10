//=============================================================
let s = 'Hello World!';
console.log(s.startsWith('Hello'));
console.log(s.includes('o'));
console.log(s.endsWith('!'))
console.log(s.startsWith('World',6));
//=============================================================
console.log('x'.repeat(3));
//=============================================================
console.log('x'.padStart(5,'abab'));
console.log('x'.padEnd(5,'abab'));
//=============================================================
let name = 'Huang', time = 'today';
console.log(`Hello, ${name}, how are you ${time}`);
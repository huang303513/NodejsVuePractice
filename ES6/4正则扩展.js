//=============================================================
let str = '1 plus 2 equeal 3';
let regexp = new RegExp(/\d+/, 'g')
console.log(str.match(regexp));
console.log(str.search(/\d+/g));
console.log(str.replace(/\d+/g,'test'));
//=============================================================
console.log(/abc/ig.source);
console.log(/abc/ig.flags)
//=============================================================
const regexp_data = /(\d{4})-(\d{2})-(\d{2})/;
const matchObj = regexp_data.exec('1990-12-34');
console.log(matchObj);

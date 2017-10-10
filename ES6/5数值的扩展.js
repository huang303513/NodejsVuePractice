//判断参数是否是有限的
console.log(Number.isFinite(15));
console.log(Number.isFinite(Infinity));
//=============================================================
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(15));
//=============================================================
console.log(Number.parseInt('12.34'));
console.log(Number.parseFloat('123.45'));
//=============================================================
console.log(Number.isInteger(25));
//=============================================================
console.log(Number.MAX_SAFE_INTEGER === (Math.pow(2, 53) - 1));
console.log(Number.isSafeInteger(3));
//=============================================================
console.log(Math.trunc(4.1));
console.log(Math.trunc(true));

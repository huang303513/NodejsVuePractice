
module.exports = {};
//=============================================================
function f() {
	console.log('I am outside!');
}

(function() {
	if (false) {
		function f() {
			console.log('I am inside!');
		}
	}
	try {
		f();
	} catch(e) {
		// statements
		console.log(e);
	} finally {
		// statements
	}
	
}());
//=============================================================
// if (false) {
// 	let x = do {
// 		let t = function() {
// 			return 2;
// 		}
// 		t() * t() + 1;
// 		console.log("hehe");
// 	};
// 	console.log(x);
// }
//=============================================================
if (false) {
	const PI = 3.1415;
	console.log(PI);
	const foo = {};
	foo.prop = 123;
	foo.name = 'dfsdfsdf';
	console.log(foo);
}
//=============================================================
const foo = Object.freeze({name:'huang'});
foo.prop = 123;
console.log(foo);

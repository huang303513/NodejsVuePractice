/**
 * test.js
 * @authors 黄成都 (huang2009303513@gmail.com)
 * @date    2017-09-20 14:46:47
 * @version $Id$
 */

module.exports = {
	name:"test"
};
module.exports.dotest = function dotest() {
	
}

console.log(require.extensions);
console.log(__filename);
console.log(__dirname);
// console.log(module);
console.log(get_builtin_module());
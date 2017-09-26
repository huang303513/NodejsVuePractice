/**
 * path.js
 * @authors 黄成都 (huang2009303513@gmail.com)
 * @date    2017-09-26 16:13:17
 * @version $Id$
 */

const path = require('path')

var basename = path.basename('./error_1.js', '.js');
console.log(basename);
console.log(process.env.PATH);
console.log(path.dirname('./error_1.js'));
console.log('./error_1.js'.split(path.sep));
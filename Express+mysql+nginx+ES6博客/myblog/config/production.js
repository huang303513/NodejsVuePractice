/*
* @Author: huangchengdu
* @Date:   2017-01-14 18:47:32
* @Last Modified by:   huangchengdu
* @Last Modified time: 2017-01-15 08:18:01
*/

let devConfig = require('./default.js');

let proConfig = {
	devEnv:false,
	port:3001
}
let disConfig = Object.assign({},devConfig,proConfig);

module.exports = disConfig;

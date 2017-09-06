/**
 * http
 * @authors 黄成都 (huang2009303513@gmail.com)
 * @date    2017-08-29 13:54:50
 * @version $Id$
 */
var http = require('http')

// http.get({
// 	hostname:"http://nodejs.cn/api/",
// 	port:80,
// 	path:'/',
// 	agent:false
// },(res)=>{
// 	console.log(res);
// });

const keepAliveAgent = new http.Agent({ keepAlive: true});
var options = {
    hostname: "http://nodejs.cn",
    port: 80,
    path: '/',
    agent: keepAliveAgent
};
http.request(options, (res) =>{
	console.log(res);
});
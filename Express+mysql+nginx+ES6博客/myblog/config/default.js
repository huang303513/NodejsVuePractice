/*
 * @Author: huangchengdu
 * @Date:   2017-01-13 16:19:01
 * @Last Modified by:   huangchengdu
 * @Last Modified time: 2017-01-16 11:00:33
 */

let devConfig = {
    port: 443,
    session: {
        secret: 'session',
        key: 'session',
        maxAge: 2592000
    },
    dbConfig: {
        connectionLimit : 30,
        host: '47.96.6.227',
        user: 'huang303513',
        password: 'huang303513',
        port: '3306',
        database: 'myblog'
    },
    devEnv:true
};

module.exports = devConfig;

//这两个文件必须写成comment.js规范。引用他们的第三方库只支持这个规范。
let mysql = require('mysql');
let config = require('config-lite');

let productionConf = require('../config/production');
if (!config) {
    config = productionConf;
}
let connection = mysql.createConnection(config.dbConfig);
connection.connect(function(err) {
    if (err) {
        console.error('===============error connecting: ' + err.stack);
        throw new Error("链接数据库失败");
    }
    console.log('================connected as id ' + connection.threadId);
});
/**
 * sql, SqlParams  参数只可能是一个或者两个
 * @return {[type]} [description]
 */
module.exports.mysqlQuery = function() {
    return new Promise((resolve, reject) => {
        try {
            connection.query(...arguments, function(err, result, fields) {
                if (err) {
                    reject({ err, result });
                } else {
                    resolve({ err, result });
                }
            });
        } catch (e) {
            reject(e, null);
        } finally {

        }
    });
}
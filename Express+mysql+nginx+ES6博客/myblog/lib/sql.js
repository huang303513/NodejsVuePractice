let mysql = require('mysql');
let config = require('../config/production.js');


let pool = mysql.createPool(config.dbConfig);
/**
 * sql, SqlParams  参数只可能是一个或者两个
 * @return {[type]} [description]
 */
module.exports.mysqlQuery = function(...args) {
    return new Promise((resolve, reject) => {
        try {
            pool.getConnection(function(err, connection) {
                if (err) {
                    reject({ err: err, result: "failure" });
                } else {
                    connection.query(...args, function(err, result, fields) {
                        if (err) {
                            reject({ err, result });
                        } else {
                            resolve({ err, result });
                        }
                        connection.release();
                    });
                }

            });
        } catch (e) {
            reject({ err: e, result: "failure" });
        } finally {

        }
    });
}
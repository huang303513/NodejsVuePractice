let mysql = require('mysql');
let prdConfig = require('../config/production.js');
let devConfig = require('../config/default.js');

let config = {};
if (process.env.NODE_ENV == 'development') {
    config = devConfig;
} else if (process.env.NODE_ENV == 'production') {
    config = prdConfig;
}
let pool = mysql.createPool(config.dbConfig);
/**
 * sql, SqlParams  参数只可能是一个或者两个
 * @return {[type]} [description]
 */
module.exports.mysqlQuery = function() {
    return new Promise((resolve, reject) => {
        try {
            var tempAguements = arguments;
            pool.getConnection(function(err, connection) {
                if (err) {
                    reject({ err: err, result: "failure" });
                } else {
                    connection.query(...tempAguements, function(err, result, fields) {
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
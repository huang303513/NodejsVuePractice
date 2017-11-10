/*
 * @Author: huangchengdu
 * @Date:   2017-01-14 11:16:16
 * @Last Modified by:   huangchengdu
 * @Last Modified time: 2017-01-14 12:11:11
 */

let mysqlQuery = require('../lib/sql').mysqlQuery;
let formatDate = require('../lib/util.date').formatDate;

module.exports = {
    // 注册一个用户
    async create(param) {
        let addSql = 'INSERT INTO users(name,password,gender,bio,avatar,created_at) VALUES(?,?,?,?,?,?)';
        let addSqlParams = [param.name, param.password, param.gender, param.bio, param.avatar, param.created_at];
        let addRet = await mysqlQuery(addSql, addSqlParams);
        if (addRet.result && addRet.result.insertId) {
            let sql = 'SELECT * FROM users where _id=' + addRet.result.insertId;
            let { err, result } = await mysqlQuery(sql);
            if (err) {
                return Promise.reject(err);
            } else {
                return Promise.resolve(result[0]);
            }
        } else {
            return Promise.reject(addRet.err);
        }
    },
    // 通过用户名获取用户信息
    async getUserByName(name) {
        let sql = 'SELECT * FROM users where name="' + name + '"';
        let { err, result } = await mysqlQuery(sql);
        if (err) {
            return Promise.reject(err);
        } else {
            return Promise.resolve(result[0]);
        }
    }
};
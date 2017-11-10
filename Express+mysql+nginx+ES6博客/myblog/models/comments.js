/*
 * @Author: huangchengdu
 * @Date:   2017-01-14 14:17:43
 * @Last Modified by:   huangchengdu
 * @Last Modified time: 2017-01-14 14:18:22
 */

let marked = require('marked');
let mysqlQuery = require('../lib/sql').mysqlQuery;
let formatDate = require('../lib/util.date').formatDate;

function contentToHtml(posts) {
    return posts.map(function(post) {
        post.content = marked(post.content);
        return post;
    });
}

module.exports = {
    // 创建一个留言
    async create(comment) {
        const dateMap = formatDate(new Date(), 'typeDictionary');
        const date = dateMap.yearMonthDay + " " + dateMap.time;
        let addSql = 'INSERT INTO comments(author,content,postId,created_at) VALUES(?,?,?,?)';
        let addSqlParams = [JSON.stringify(comment.author), comment.content, comment.postId, date];
        let commentRes = await mysqlQuery(addSql, addSqlParams);
        if (commentRes.err) {
            Promise.reject(commentRes.err);
        } else {
            let modSql = 'UPDATE posts SET commentsCount = commentsCount + 1 where _id=' + comment.postId;
            let { err, result } = await mysqlQuery(modSql);
            if (err) {
                Promise.reject(err);
            } else {
                Promise.resolve(commentRes.result);
            }
        }
    },
    // 通过用户 id 和留言 id 删除一个留言
    async delCommentById(commentId, postId) {
        let sql = 'DELETE FROM comments where _id=' + commentId;
        let commentRes = await mysqlQuery(sql);
        if (commentRes.err) {
            Promise.reject(commentRes.err);
        } else {
            let modSql = 'UPDATE posts SET commentsCount = commentsCount - 1 where _id=' + postId;
            let { err, result } = await mysqlQuery(modSql);
            if (err) {
                Promise.reject(err);
            } else {
                Promise.resolve(commentRes.result);
            }
        }
    },
    // 通过文章 id 获取该文章下所有留言，按留言创建时间升序
    async getComments(postId, cb) {
        let sql = 'SELECT * FROM comments where postId=' + postId;
        let { err, result } = await mysqlQuery(sql);
        try {
            result = contentToHtml(result);
            result.forEach(function(item, index) {
                item.author = JSON.parse(item.author);
            });
        } catch (e) {
            err = e;
        } finally {
            if (err) {
                return Promise.reject(err);
            } else {
                return Promise.resolve(result);
            }
        }
    }
};
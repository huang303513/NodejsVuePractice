let marked = require('marked');
let CommentModel = require('./comments');
let mysqlQuery = require('../lib/sql').mysqlQuery;
let formatDate = require('../lib/util.date').formatDate;


function contentToHtml(posts) {
    return posts.map(function(post) {
        post.content = marked(post.content);
        return post;
    });
}

module.exports = {
    // 创建一篇文章
    async create(post) {
        const dateMap = formatDate(new Date(), 'typeDictionary');
        const date = dateMap.yearMonthDay + " " + dateMap.time;

        let addSql = 'INSERT INTO posts(author,title,content,pv,created_at,commentsCount,authorId) VALUES(?,?,?,?,?,?,?)';
        let addSqlParams = [JSON.stringify(post.author), post.title, post.content, '0', date, '0', post.author._id];
        let addRet = await mysqlQuery(addSql, addSqlParams);
        if (!addRet.err && addRet.result.insertId) {
            let sql = 'SELECT * FROM posts where _id=' + addRet.result.insertId;
            let { err, result } = await mysqlQuery(sql);
            try {
                result = result[0];
                result.author = JSON.parse(result.author);
                result.content = marked(result.content);
            } catch (e) {
                err = e;
            } finally {
                if (err) {
                    return Promise.reject(err);
                } else {
                    return Promise.resolve(result);
                }
            }
        } else {
            return Promise.reject(err);
        }
    },
    // 通过文章 id 获取一篇文章
    async getPostById(postId) {
        const sql = 'SELECT * FROM posts where _id=' + postId;
        let { err, result } = await mysqlQuery(sql);
        try {
            result = result[0];
            result.author = JSON.parse(result.author);
            result.content = marked(result.content);
        } catch (e) {
            err = e;
        } finally {
            if (err) {
                return Promise.reject(err);
            } else {
                return Promise.resolve(result);
            }
        }
    },
    // 按创建时间降序获取所有用户文章或者某个特定用户的所有文章
    async getPosts(authorId) {
        let sql = 'SELECT * FROM posts';
        if (authorId) {
            sql = sql + " where authorId=" + authorId;
        }
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
    },
    // 通过文章 id 给 pv 加 1
    async incPv(postId) {
        let sql = 'UPDATE posts SET pv = pv + 1 where _id=' + postId;
        let { err, result } = await mysqlQuery(sql);
        if (err) {
            return Promise.reject(err);
        } else {
            return Promise.resolve(result);
        }
    },
    // 通过文章 id 获取一篇原生文章（编辑文章）
    getRawPostById(postId) {
        return this.getPostById(postId);
    },
    // 通过用户 id 和文章 id 更新一篇文章
    async updatePostById(data) {
        let modSql = 'UPDATE posts SET title = ?,content = ?,author = ? WHERE _id = ?';
        let modSqlParams = Object.values(data);
        let { err, result } = await mysqlQuery(modSql, modSqlParams);
        if (err) {
            return Promise.reject(err);
        } else {
            return Promise.resolve(result);
        }
    },
    // 通过用户 id 和文章 id 删除一篇文章
    async delPostById(postId) {
        let sql = 'DELETE FROM posts where _id=' + postId;
        let delRes = await mysqlQuery(sql);
        if (delRes.err) {
            return Promise.reject(delRes.err);
        } else {
            sql = 'DELETE FROM comments where postId=' + postId;
            let { err, result } = await mysqlQuery(sql);
            if (err) {
                return Promise.reject(err);
            } else {
                return Promise.resolve(result);
            }
        }
    }
};
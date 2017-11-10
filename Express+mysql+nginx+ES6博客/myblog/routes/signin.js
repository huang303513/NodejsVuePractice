/*
 * @Author: huangchengdu
 * @Date:   2017-01-13 21:54:40
 * @Last Modified by:   huangchengdu
 * @Last Modified time: 2017-01-14 12:14:32
 */

let sha1 = require('sha1');
let express = require('express');
let router = express.Router();
let UserModel = require('../models/users');
let checkNotLogin = require('../middlewares/check').checkNotLogin;

// GET /signin 登录页
router.get('/', checkNotLogin, function(req, res, next) {
    res.render('signin');
});
// POST /signin 用户登录
router.post('/', checkNotLogin, function(req, res, next) {
    let name = req.fields.name;
    let password = req.fields.password;
    UserModel.getUserByName(name).then(user => {
        if (!user) {
            req.flash('error', '用户不存在');
            return res.redirect('back');
        }
        // 检查密码是否匹配
        if (sha1(password) !== user.password) {
            req.flash('error', '用户名或密码错误');
            return res.redirect('back');
        }
        req.flash('success', '登录成功');
        // 用户信息写入 session
        delete user.password;
        req.session.user = user;
        // 跳转到主页
        res.redirect('/posts');
    }).catch(next);
});

module.exports = router;
/*
 * @Author: huangchengdu
 * @Date:   2017-01-13 21:55:28
 * @Last Modified by:   huangchengdu
 * @Last Modified time: 2017-01-14 11:22:20
 */

// let express = require('express');
// let router = express.Router();

// let checkNotLogin = require('../middlewares/check').checkNotLogin;

// // GET /signup 注册页
// router.get('/', checkNotLogin, function(req, res, next) {
//   res.render('signup');
// });

// // POST /signup 用户注册
// router.post('/', checkNotLogin, function(req, res, next) {
//   res.send(req.flash());
// });

// module.exports = router;

let fs = require('fs');
let path = require('path');
let sha1 = require('sha1');
let express = require('express');
let router = express.Router();
let UserModel = require('../models/users');
let checkNotLogin = require('../middlewares/check').checkNotLogin;
let formatDate = require('../lib/util.date').formatDate;

// GET /signup 注册页
router.get('/', checkNotLogin, function(req, res, next) {
    res.render('signup');
});

// POST /signup 用户注册
router.post('/', checkNotLogin, function(req, res, next) {
    let name = req.fields.name;
    let gender = req.fields.gender;
    let bio = req.fields.bio;
    let avatar = req.files.avatar.path.split(path.sep).pop();
    let password = req.fields.password;
    let repassword = req.fields.repassword;
    // 校验参数
    try {
        if (!(name.length >= 1 && name.length <= 10)) {
            throw new Error('名字请限制在 1-10 个字符');
        }
        if (['m', 'f', 'x'].indexOf(gender) === -1) {
            throw new Error('性别只能是 m、f 或 x');
        }
        if (!(bio.length >= 1 && bio.length <= 30)) {
            throw new Error('个人简介请限制在 1-30 个字符');
        }
        if (!req.files.avatar.name) {
            throw new Error('缺少头像');
        }
        if (password.length < 6) {
            throw new Error('密码至少 6 个字符');
        }
        if (password !== repassword) {
            throw new Error('两次输入密码不一致');
        }
    } catch (e) {
        // 注册失败，异步删除上传的头像
        fs.unlink(req.files.avatar.path);
        req.flash('error', e.message);
        return res.redirect('/signup');
    }
    // 明文密码加密
    password = sha1(password);

    const dateMap = formatDate(new Date(), 'typeDictionary');
    const date = dateMap.yearMonthDay + " " + dateMap.time;
    // 待写入数据库的用户信息
    let user = {
        name: name,
        password: password,
        gender: gender,
        bio: bio,
        avatar: avatar,
        created_at: date
    };

    UserModel.create(user).then(user => {
        req.session.user = user;
        // 写入 flash
        req.flash('success', '注册成功');
        // 跳转到首页
        res.redirect('/posts');
    }).catch(err => {
        fs.unlink(req.files.avatar.path);
        // 用户名被占用则跳回注册页，而不是错误页
        if (err.message.match('Duplicate entry')) {
            req.flash('error', '用户名已被占用');
            return res.redirect('/signup');
        } else {
            //console.log('err.message==================', err.message);
            next(err);
        }
    });
});

module.exports = router;
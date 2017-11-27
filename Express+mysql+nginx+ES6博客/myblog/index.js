/*
 * @Author: huangchengdu
 * @Date:   2017-01-13 15:57:33
 * @Last Modified by:   huangchengdu
 * @Last Modified time: 2017-01-16 11:19:32
 */

var path = require('path');
var express = require('express');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var flash = require('connect-flash');
var prdConfig = require('./config/production.js');
var devConfig = require('./config/default.js');
var routes = require('./routes');
var pkg = require('./package');
var winston = require('winston');
var expressWinston = require('express-winston');
var fs = require('fs');
var http = require('http');
var https = require('https');

var config = {};
if (process.env.NODE_ENV == 'development') {
    config = devConfig;
} else if (process.env.NODE_ENV == 'production') {
    config = prdConfig;
}

var app = express();

var httpServer = http.createServer(app);
if (config.devEnv) {
    var privateKey = fs.readFileSync('ssl/private.pem', 'utf8');
    var certificate = fs.readFileSync('ssl/file.crt', 'utf8');
    var credentials = { key: privateKey, cert: certificate };
    httpServer = https.createServer(credentials, app);
}

// 设置模板目录
app.set('views', path.join(__dirname, 'views'));
// 设置模板引擎为 ejs
app.set('view engine', 'ejs');
// 设置静态文件目录,如果是生产环境，就不用设置了，通过nginx设置。
if (config.devEnv) {
    app.use(express.static(path.join(__dirname, 'public')));
}
if (true || config.devEnv) {
    const NODE_ENV = process.env.NODE_ENV;
    console.log(NODE_ENV + "TEST");
    console.log('process.env==========', JSON.stringify(config) + "hehehe");
    console.log("__dirname=================", __dirname);
}

// session 中间件
app.use(session({
    key: config.session.key,
    secret: config.session.secret,
    cookie: {
        maxAge: config.session.maxAge
    },
    store: new MySQLStore(config.dbConfig),
    connectionLimit: 10,
    expiration: 86400000,
    resave: true,
    saveUninitialized: true
}));

// flash 中间价，用来显示通知
app.use(flash());

let uploadDir = "/usr/local/webserver/nginx/static/img";
if (config.devEnv) {
    uploadDir = path.join(__dirname, 'public/img');
}
// 处理表单及文件上传的中间件
app.use(require('express-formidable')({
    uploadDir: uploadDir,
    keepExtensions: true // 保留后缀
}));

app.locals.blog = {
    title: pkg.name,
    description: pkg.description
};

// 添加模板必需的三个变量
// res.render 传入的对象> res.locals 对象 > app.locals 对象，所以 app.locals 和 res.locals 几乎没有区别，都用来渲染模板。
// 使用上的区别在于：app.locals 上通常挂载常量信息（如博客名、描述、作者信息），res.locals 上通常挂载变量信息，即每次请求可能的值都不一样（如请求者信息，res.locals.user = req.session.user）。
app.use(function(req, res, next) {
    res.locals.user = req.session.user;
    res.locals.success = req.flash('success').toString();
    res.locals.error = req.flash('error').toString();
    next();
});

app.use(expressWinston.logger({
    transports: [
        // new(winston.transports.Console)({
        //     json: true,
        //     colorize: true
        // }),
        new winston.transports.File({
            filename: 'logs/success.log'
        })
    ]
}));
routes(app);
app.use(expressWinston.errorLogger({
    transports: [
        // new winston.transports.Console({
        //     json: true,
        //     colorize: true
        // }),
        new winston.transports.File({
            filename: 'logs/error.log'
        })
    ]
}));

// error page
app.use(function(err, req, res, next) {
    res.render('error', {
        error: err
    });
});
//未处理奔溃，系统奔溃
process.on('uncaughtException', (err) => {
    fs.writeSync(1, `Caught exception: ${err}\n`);
});
//promise错误未处理
process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at:', p, 'reason:', reason);
});
//系统警告
process.on('warning', (warning) => {
    console.warn(warning.name); // Print the warning name
    console.warn(warning.message); // Print the warning message
    console.warn(warning.stack); // Print the stack trace
});

const port = process.env.PORT || config.port;
if (module.parent) {
    module.exports = app;
} else {
    httpServer.listen(port, function() {
        if (config.devEnv) {
            console.log('HTTPS Server is running on: https://localhost:%s', port);
        } else {
            console.log('HTTPS Server is running on: http://localhost:%s', port);
        }
    });
}
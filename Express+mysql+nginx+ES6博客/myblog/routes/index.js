/*
 * @Author: huangchengdu
 * @Date:   2017-01-13 15:58:22
 * @Last Modified by:   huangchengdu
 * @Last Modified time: 2017-01-14 15:03:24
 */

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.redirect('/posts');
    });
    app.use('/signup', require('./signup'));
    app.use('/signin', require('./signin'));
    app.use('/signout', require('./signout'));
    app.use('/posts', require('./posts'));
    app.use('/jsonp', require('./jsonp'));
    app.use('/vue', require('./vue'));
    // 404 page
    app.use(function(req, res) {
        if (!res.headersSent) {
            res.status(404).render('404');
        }
    });
};
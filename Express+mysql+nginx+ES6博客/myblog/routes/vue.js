let fs = require('fs');
let path = require('path');
let sha1 = require('sha1');
let express = require('express');
let router = express.Router();
const Vue = require('vue');
const render = require('vue-server-renderer').createRenderer()

router.get('/', (req, res) => {
    const app = new Vue({
        data: {
            url: req.url
        },
        template: `<div>访问的 URL 是12： {{ url }}</div>`
    });
    render.renderToString(app, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error')
            return
        }
        res.end(`
          <!DOCTYPE html>
          <html lang="en">
            <meta charset="utf-8">
            <head><title>Hello</title></head>
            <body>${html}</body>
          </html>
        `);
    });
});

router.get('/test1', (req, res) => {
    const app = new Vue({
        data: {
            url: req.url
        },
        template: fs.readFileSync('./views/vue/1.html', 'utf-8')
    });
    render.renderToString(app, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error')
            return
        }
        res.end(`
        <!DOCTYPE html>
        <html lang="en">
          <meta charset="utf-8">
          <head><title>Hello</title></head>
          <body>${html}</body>
        </html>
      `);
    });
});

module.exports = router;
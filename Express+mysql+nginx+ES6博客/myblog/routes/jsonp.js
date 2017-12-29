let express = require('express');
let router = express.Router();
//JSONP请求
router.get('/jsonpRequest', function(req, res, next) {
    //console.log("=====================" + JSON.stringify(req.query));
    //获取name和site参数的值
    let name = req.query.name;
    let site = req.query.site;
    //拼接回调值
    let serverres = {
    	serverReceive:{
    		name:name,
    		site:site
    	},
    	serverSend:"hello," + name + ".your site is https://" + site
    }
    //返回值。其实就是callback....()种种类型javascript字符串
    res.end(req.query.callback + "(" + JSON.stringify(serverres) + ")")
});
module.exports = router;
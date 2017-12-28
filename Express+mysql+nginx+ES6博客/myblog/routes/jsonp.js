let express = require('express');
let router = express.Router();

//JSONP请求
router.get('/jsonpRequest', function(req, res, next) {
    console.log("=====================" + JSON.stringify(req.query));
    let name = req.query.name;
    let site = req.query.site;
    let serverres = {
    	serverReceive:{
    		name:name,
    		site:site
    	},
    	serverSend:"hello," + name + ".your site is https://" + site
    }
    res.end(req.query.callback + "(" + JSON.stringify(serverres) + ")")
});

module.exports = router;
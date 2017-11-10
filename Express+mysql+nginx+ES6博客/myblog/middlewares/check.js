/*
* @Author: huangchengdu
* @Date:   2017-01-13 17:10:07
* @Last Modified by:   huangchengdu
* @Last Modified time: 2017-01-13 21:40:28
*/

module.exports = {
	checkLogin:function(req,res,next) {
		if (!req.session.user) {
			req.flash('error','未登录');
			return res.redirect('/signin');
		}
		next();
	},
	checkNotLogin:function(req,res,next){
		if (req.session.user) {
			req.flash('error','已登录');
			return res.redirect('back');//返回之前的页面
		}
		next();
	}
};





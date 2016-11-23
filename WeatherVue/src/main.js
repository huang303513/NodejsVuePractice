import Vue from 'vue';
import App from './components/App';
import Router from 'vue-router';
import VueTouch from 'vue-touch';
import './less/style.less';

var VueResource = require('vue-resource');
Vue.use(VueResource);

Vue.use(Router);
var router = new Router({
    history: false
})

Vue.use(VueTouch);

routerConfig(router);
router.start(App, '#start');
window.router = router;


function routerConfig(router) {
    router.map({
        '/provincelist': {
            name: 'provincelist',
            component: function(resolve) {
                require(['./components/ProvinceList.vue'], resolve);
            }
        },
        '/citylist': {
            name: 'citylist',
            component: function(resolve) {
                require(['./components/CityList.vue'], resolve);
            }
        },
        '/county': {
            name: 'county',
            component: function(resolve) {
                require(['./components/County.vue'], resolve);
            }
        },
        '/weather': {
            name: 'weather',
            component: function(resolve) {
                require(['./components/Weather.vue'], resolve);
            }
        }
    });

    router.afterEach(function(transition) {
        // if (transition.to && transition.to.pageId) {
        //     cUtil.sendUbt(transition.to);
        // }
    })

    router.redirect({
        "*": '/provincelist'
    });
}

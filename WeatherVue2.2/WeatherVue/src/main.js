// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './components/App'
// import router from './router'


import App from './components/App.vue';
import ProvinceList from './components/ProvinceList.vue'
import Router from 'vue-router';
import VueTouch from 'vue-touch';
import './less/style.less';
var VueResource = require('vue-resource');


Vue.use(VueResource);
Vue.use(Router);
Vue.use(VueTouch, { name: 'v-touch' })

const routes = [{
    path: '/',
    component: ProvinceList
},{
    path: '/provincelist',
    name: 'provincelist',
    component: ProvinceList
}, {
    path: '/citylist',
    name: 'citylist',
    component: function(resolve) {
        require(['./components/CityList.vue'], resolve)
    }
}, {
    path: '/county',
    name: 'county',
    component: function(resolve) {
        require(['./components/County.vue'], resolve)
    }
}, {
    path: '/weather',
    name: 'weather',
    component: function(resolve) {
        require(['./components/Weather.vue'], resolve)
    }
}, {
    path: '*',
    redirect: {name:"provincelist"}
}];

var router = new Router({
    // history: true,
    // linkActiveClass: 'active',
    routes: routes
});

const app = new Vue({
    router: router,
    render: function(h) {
        return h(App)
    }
}).$mount('#app');
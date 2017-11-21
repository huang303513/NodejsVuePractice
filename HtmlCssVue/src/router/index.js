import Vue from 'vue'
import Router from 'vue-router'
import '../style/style.less'

Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        name: 'Index',
        component: function(resolve) {
            require(['@/pages/Index.vue'], resolve);
        },
        meta: { name: "index" },
        hash: "index"
    }],
    mode: 'hash'
});

router.beforeEach((to, from, next) => {
    alert('heh' + JSON.stringify(to));
    next();
});

window.router = router;
export default router;
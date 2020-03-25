import Home from "./components/Home.vue"
import Login from "./components/Login.vue"
import Register from "./components/Register.vue"
import Profile from "./components/Profile.vue"

import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [


        { path: '/', component: Home },
        { path: '/login', component: Login, meta: { gest: true } },
        { path: '/register', component: Register, meta: { gest: true } },
        { path: '/profile', component: Profile, meta: { secure: true } }
    ]

});
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.secure)) {
        // this route requires auth, check if logged in
        // if no token
        if (localStorage.getItem('token') == null) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.guest)) {
        if (localStorage.getItem('token') == null) {
            next() // make sure to always call next()!
        } else {
            console.log("no token");
            next({ path: "/profile" });
        }
    } else { next() }

});
export default router;
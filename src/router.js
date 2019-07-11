import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Signup from "./views/Signup.vue";
import Store from "./store/index";

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/signup",
            name: "signup",
            component: Signup
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.path == "/login" || to.path == "/signup") {
        if (Store.getters.getAuth.name == "") {
            next();
        } else {
            next("/home");
        }
    } else {
        if (Store.getters.getAuth.name == "") {
            next("/login");
        } else {
            next();
        }
    }
})

export default router;
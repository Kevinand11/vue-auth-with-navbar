import Vue from "vue";
import VueSession from "vue-session";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";

import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "fontawesome/js/all";
import "fontawesome/css/all.css";

Vue.config.productionTip = false;
Vue.use(VueSession);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
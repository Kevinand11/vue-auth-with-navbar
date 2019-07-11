import Vue from "vue";
import Vuex from "vuex";
import Todos from "./modules/todos.js";
import Users from "./modules/users.js";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Todos,
        Users
    },
})
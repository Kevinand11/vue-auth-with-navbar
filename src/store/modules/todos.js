const state = {
    todos: [
        { id: 1, title: "Title One" },
        { id: 2, title: "Title Two" }
    ]
}

const getters = {
    allTodos: (state) => state.todos
}

const actions = {
    fetchTodos({ commit }) {
        if (this._vm.$session.has("todos")) {
            commit("setTodos", this._vm.$session.get("todos"))
        } else {
            /* axios.get("https://jsonplaceholder.typicode.com/todos").then(response => {
                commit("setTodos", response.data)
                this._vm.$session.set("todos", response.data)
            }) */
        }
    }
}

const mutations = {
    setTodos: (state, todos) => { state.todos = todos }
}

export default {
    state,
    getters,
    actions,
    mutations
}
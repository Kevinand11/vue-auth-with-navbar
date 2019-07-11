<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">BadAss</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" v-if="isAuth">Home</router-link>
                    </li> 
                    <li class="nav-item">
                        <router-link to="/login" class="nav-link" v-if="!isAuth">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/signup" class="nav-link" v-if="!isAuth">Sign Up</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-if="isAuth">
                                Hey {{ getAuth.name }}  
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown" v-if="isAuth">
                            <a class="dropdown-item" href="#" @click="logout">Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "navbar",
    computed: {
        ...mapGetters(["getAuth"]),
        isAuth() {
            if (this.getAuth.name == "" || this.getAuth.email == "") {
                return false
            } else {
                return true
            }
        },
    },
    methods: {
        ...mapActions(["setAuth"]),
        logout() {
            var user = { name: "", email: "", password: "" }
            this.setAuth(user)
            this.$router.push("/login")
        },
    }
}
</script>

<style>

</style>
<template>
    <div class="row my-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                    <div class="card-body">
                        <h3 class="text-center my-1">Login</h3>
                        <div class="form-group">
                            <input type="text" placeholder="Email" class="form-control" v-model="email" :class="{ 'is-valid': isValidE && isSubmitted,'is-invalid':!isValidE}">
                            <span class="bg-danger rounded">{{errors.email}}</span>
                        </div>
                        <div class="form-group">
                            <input type="password" placeholder="Password" class="form-control" v-model="password" :class="{ 'is-valid': isValidP && isSubmitted,'is-invalid':!isValidP}">
                            <span class="bg-danger rounded">{{errors.password}}</span>
                        </div>
                        <div class="form-group text-center">
                            <button class="btn form-control btn-success" @click="loginUser">Login</button>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
    name: "login",
    data() {
        return {
            email: "",
            password: "",
            error: { email: "", password: "" },
            isSubmitted: false,
        }
    },
    methods: {
        ...mapActions(["setAuth"]),
        checkErrors() {
            var valid = true
            var filtered = this.allUsers.filter(x => x.email == this.email)
            if (filtered.length == 0) {
                this.error.email = "Email doesn't exist in database"
                this.error.password = "No password for invalid email"
                valid = false
            }
            if (this.email.length < 4) {
                this.error.email = "A valid email is required"
                this.error.password = "No password for invalid email"
                valid = false
            }
            if (this.password.length < 6) {
                this.error.password = "Password must be up to 6 characters"
                valid = false
            }
            if (filtered.length > 0 && this.password !== filtered[0].password) {
                this.error.password = "Invalid password for email"
                valid = false
            }
            return valid
        },
        loginUser() {
            this.isSubmitted = true
            this.error = { name: "", email: "", password: "", cpassword: "" }
            if (this.checkErrors()) {
                var filtered = this.allUsers.filter(x => x.email == this.email)
                this.setAuth(filtered[0])
                this.$router.push("/")
            }
        },
    },
    computed: {
        ...mapGetters(["allUsers"]),
        errors() { return this.error },
        isValidE() { return this.error.email == "" },
        isValidP() { return this.error.password == "" }
    }
}
</script>
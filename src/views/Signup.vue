<template>
     <div class="row my-3">
          <div class="col-md-6 offset-md-3">
               <div class="card">
                    <div class="card-body">
                         <h3 class="text-center my-1">Signup</h3>
                         <div class="form-group">
                              <input type="text" placeholder="Name" class="form-control" v-model="name" :class="{ 'is-valid': isValidN && isSubmitted,'is-invalid':!isValidN}">
                              <span class="bg-danger rounded">{{errors.name}}</span>
                         </div>
                         <div class="form-group">
                              <input type="text" placeholder="Email" class="form-control" v-model="email" :class="{ 'is-valid': isValidE && isSubmitted,'is-invalid':!isValidE}">
                              <span class="bg-danger rounded">{{errors.email}}</span>
                         </div>
                         <div class="form-group">
                              <input type="password" v-model="password" placeholder="Password" class="form-control" :class="{ 'is-valid': isValidP && isSubmitted,'is-invalid':!isValidP}">
                              <span class="bg-danger rounded">{{errors.password}}</span>
                         </div>
                         <div class="form-group">
                              <input type="password" v-model="cpassword" placeholder="Confirm Password" class="form-control" :class="{ 'is-valid': isValidCP && isSubmitted,'is-invalid':!isValidCP}">
                         <span class="bg-danger rounded">{{errors.cpassword}}</span>
                         </div>
                         <div class="form-group text-center">
                              <button class="btn form-control btn-success" @click="registerUser">Signup</button>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
    name:"signup", 
    data(){
        return {
            name:"", 
            email:"", 
            password:"",
            cpassword:"",
            error:{name:"",email:"",password:"",cpassword:""},
            isSubmitted:false, 
    }},
    methods:{
        ...mapActions(["regUser","setAuth"]),
        checkErrors(){
            var valid = true
            if(this.name.length<3){
                    this.error.name="Name must be up to 3 characters"
                    valid = false
            }
            var filtered = this.allUsers.filter(x=>x.email==this.email)
            if(filtered.length>0){
                    this.error.email="Email already registered"
                    valid = false
            }
            if(this.email.length<4){
                    this.error.email="A valid email is required"
                    valid = false
            }
            if(this.password.length<6){
                    this.error.password="Password must be up to 6 characters"
                    valid = false
            }
            if(this.cpassword.length<6){
                    this.error.cpassword="Password must be up to 6 characters"
                    valid = false
            }
            if(this.cpassword!==this.password){
                    this.error.cpassword = "Passwords dont match"
                    valid = false
            }
            return valid
        }, 
        registerUser(){
            this.isSubmitted = true
            this.error={name:"",email:"",password:"",cpassword:""}
                var lastId = this.allUsers[this.allUsers.length-1].id
                var user = {id:lastId+1,name:this.name,
                    email:this.email,password:this.password}
                if(this.checkErrors()){ 
                this.regUser(user)
                this.setAuth(user)
                this.$router.push("/")
                }
        },
    }, 
    computed:{
        ...mapGetters(["allUsers"]),
        errors(){return this.error},
        isValidN(){return this.error.name==""},
        isValidE(){return this.error.email==""},
        isValidP(){return this.error.password==""},
        isValidCP(){return this.error.cpassword==""} 
    }
}
</script>




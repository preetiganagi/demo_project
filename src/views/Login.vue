<template>
    <img src="../assets/resto-logo.webp" class="imageLogo">
    <h1> Login </h1>
    <!-- validations -->
    <div class="login">
        <input type="text" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button v-on:click="userLogin">Login</button>
    </div>
    <p> Not registerd? sign up here <router-link to="/sign-up"> Sign Up</router-link>
    </p>
</template>
<script>
import axios from 'axios';

export default {
    name: "LoginVue",
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods:{
        async userLogin(){
            let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
            if (result.status == 200 && result.data.length>0) {
                console.log(result);
                localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                this.$router.push({name:"Home"})
            }
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info')
        if(!user){
            this.$router.push({name:"Login"})
        }
    }
}
</script>
<style></style>
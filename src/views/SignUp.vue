<template>
    <img src="../assets/resto-logo.webp" class="imageLogo">
    <h1> Sign Up </h1>
<div class="register">
    <input type="text" v-model="name" placeholder="Enter Name"> 
    <input type="text" v-model="email" placeholder="Enter Email"> 
    <input type="password" v-model="password" placeholder="Enter Password"> 
    <button v-on:click="signUp">Sign Up</button>
</div>
<p> Already registerd? login here <router-link to="/login"> Login </router-link> </p>

</template>

<script>
import axios from 'axios'
export default{
    data(){
        return{
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
        async signUp(){
            let result = await axios.post("http://localhost:3000/users",
            {name: this.name,email:this.email, password:this.password});
            if (result.status == 201) {
                console.log(result.data);
                localStorage.setItem("user-info", JSON.stringify(result.data))
                this.$router.push({ name: "Home"})
            }
        }
    },
    mounted(){
        let user = localStorage.getItem("user-info")
        if (user) {
            this.$router.push({name:"Home"})
        }

    }
}
</script>
<style>


</style>
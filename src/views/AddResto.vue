<template>
<h1> Hello {{ name }}, Add Tasty foods restaurant</h1>
<div class="addresto">
        <input type="text" v-model="restaurant.name" placeholder="Enter Restaurant Name"> 
        <input type="text" v-model="restaurant.address" placeholder="Enter Address"> 
        <input type="text" v-model="restaurant.contact" placeholder="Enter Contact No"> 
        <button v-on:click="addRestaunt">Add Restaurant</button>
</div>

</template>
<script>
import axios from "axios";
export default{
    name: "HomeVue",
    data(){
        return{
            name:'',
            restaurant: {
                name : '',
                address:'',
                contact:'',
            }
        }
    },
    mounted(){
        let user = localStorage.getItem("user-info")
        console.log(user);
        if (!user) {
            this.$router.push({name:"Login"})
        }else{
            this.name = JSON.parse(user).name;
        }


    },
    methods:{
        async addRestaunt(){
            let result = await axios.post("http://localhost:3000/restaurants", { 
                name:this.restaurant.name, 
                address:this.restaurant.address, 
                contact:this.restaurant.contact})
            console.log(this.restaurant.name);
            if (result.status == 201) {
                this.$router.push({name:"Home"})
            }
        }
    }
}
</script>
<style>
</style>
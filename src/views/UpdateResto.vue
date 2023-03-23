<template>
    <Header></Header>
<h1> Hello {{ name }}, Update Restaurant Information</h1>
<div class="addresto">
        <input type="text" v-model="restaurant.name" placeholder="Enter Restaurant Name"> 
        <input type="text" v-model="restaurant.address" placeholder="Enter Address"> 
        <input type="text" v-model="restaurant.contact" placeholder="Enter Contact No"> 
        <button v-on:click="updateResto">Update Restaurant</button>
</div>
<MenuList></MenuList>
</template>
<script>
import axios from "axios";
import Header from "../components/Header.vue"
import MenuList from "../views/MenuList.vue";
export default{
    name: "HomeVue",
    components:{
        Header,
        MenuList

    },
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
    async created(){
        let id = this.$route.params.id
        let result = await axios.get("http://localhost:3000/restaurants/"+ id)
        this.restaurant = result.data
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({name:"SignUp"})
        }else{
            this.name = JSON.parse(user).name;

        }
    },
    methods:{
        async updateResto(){
            let id = this.$route.params.id
            let result = await axios.patch("http://localhost:3000/restaurants/"+id, {
                name:this.restaurant.name, 
                address:this.restaurant.address, 
                contact:this.restaurant.contact})
            console.log(this.restaurant.name);
            if (result.status == 200) {
                this.$router.push({name:"Home"})
            }
        }
    }
    
}
</script>
<style>
.addresto input{

width: 300px;
padding: 10px;
display: block;
height: 30px;
border: solid;
margin-left: auto;
margin-bottom: 10px;
margin-right: auto;

}


.addresto button{
width: 325px;
padding: 10px;
height: 50px;
background-color: skyblue;
border: 1px solid;
cursor: pointer;
}
</style>
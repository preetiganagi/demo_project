<template>
    <Header></Header>

    <div >
        <div>
            <h1> Hello {{ name }}, Welcome to Home</h1>
        <h2 >List of Pizza places you like</h2>
        </div>
   <div class="table_style">

   
<table border="1">
<tr>
    <td >Id</td>
    <td>Name</td>
    <td>Address</td>
    <td>Contact</td>
    <td>Actions</td>
</tr>
<tr v-for="item in restaurant" :key="item.id">
    <td >{{ item.id }}</td>
    <td>{{ item.name }}</td>
    <td>{{ item.address }}</td>
    <td>{{ item.contact }}</td>
    <td><router-link :to="'/update-resto/'+item.id">Update</router-link></td>
    <td><button v-on:click="deleteResto(item.id)">Delete</button></td>

</tr>
</table>
</div>  
</div>

</template>
<script>
import Header from "../components/Header.vue"
import axios from 'axios'
export default{
    name: "HomeVue",
    components:{
        Header
    },
    data(){
        return{
            name : '',
            restaurant:[]
        }
    },
    async mounted(){
        this.loadData();

    },
    methods:{
        async deleteResto(id){
            // let id = this.$route.params.id
            let result = await axios.delete("http://localhost:3000/restaurants/"+id);
            // this.restaurant =result.dat
            // console.log(result);
            if (result.status == 200) {
                this.loadData();
            }
        },
        async loadData(){
            let user = localStorage.getItem("user-info")
        this.name = JSON.parse(user).name;
        if (!user) {
            this.$router.push({name:"SignUp"})
        }
        let result = await axios.get("http://localhost:3000/restaurants");
        this.restaurant =result.data
        }
    }
}
</script>
<style>
.heading {
    float: left;
    display: block;
}
.table_style {
    display: grid;
}
</style>
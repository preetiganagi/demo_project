<template>
    <div >
        <div>
            <h1> Hello {{ name }}, Welcome to Home</h1>
        <h2 >List of Pizza places you like</h2>
        </div>
   <div id="table_style">

   
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
    <td><router-link :to="'/menu-list/'+item.id">View</router-link>&nbsp;&nbsp;
    <router-link :to="'/update-resto/'+item.id">Update</router-link>&nbsp;&nbsp;
    <button v-on:click="deleteResto(item.id)">Delete</button></td>


</tr>
</table>
</div>  
</div>

</template>
<script>
import axios from 'axios'
export default{
    name: "HomeVue",
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
/* .table_style {
    display: grid;
} */

#table_style{
    display: grid;

    /* background: #FFF8B1; */
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#table_style tr{
    padding: 0;
}
#table_style td{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
    cursor: pointer;
}

</style>
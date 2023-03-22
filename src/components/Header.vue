<template>
<div class="nav">
    <router-link to="/"> Home </router-link>
    <router-link to="/add-resto"> Add Restaurant </router-link>
    <!-- <router-link to="/update-resto"> Update Restaurant </router-link> -->
    <a v-on:click="logout" id="logout"> Logout </a>
</div>
</template>
<script>
export default{
    name:"HeaderVue",
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:"Login"})
        }
    }
}
</script>

<style>

.nav{
    background-color: black;
    overflow: hidden;
}
.nav a{
    
    font-size: 20px;
    float: left;
    margin-right: 5px;
    padding: 10px;
    text-decoration: none;
    color: antiquewhite;
}
.nav a:hover {
    background: #ddd;
    color: #333;
}
#logout {
    float: right;
    margin-right: 15px;
    cursor: pointer;

}

</style>
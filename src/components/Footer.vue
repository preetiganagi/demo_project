<template>
    <div class="footer">
        <h3> © 2023 Copyright: tasteyfood.com </h3>
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
    
    .footer{
        background-color: black;
        overflow: hidden;
        bottom: 0;
        position: fixed;
        position:sticky;
        width: -webkit-fill-available;
        height: fit-content;
        text-decoration: none;
    color: antiquewhite;
    }
    </style>
<template>
  <div>
    <router-view />
  </div>
</template>
  
<script>


export default {
  name: 'App'
}
</script>
  
<style>
@import './assets/css/form.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
body{
  padding: 0;
  margin: 0;
}
#div2 {
  float: right;
  display: inline;
}

#div1 {
  float: left;
  display: inline;
}

.imageLogo {
  width: 300px;
}
</style>
  
<template>
  <div>
    <Header v-if="showHeader"></Header>

   

    <router-view />

    <div class="footerFinal">
      <Footer v-if="showHeader"></Footer>

    </div>
  </div>
</template>
  
<script>

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue"
export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  computed:{
    showHeader(){
      if (this.$route.path == "/login" || this.$route.path == "/sign-up") {
        return false
      }
      return true
    }
  }
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
.footerFinal{
  position: fixed;
  bottom: 0;
  width: -webkit-fill-available;

}
</style>
  
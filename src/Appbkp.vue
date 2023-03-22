<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <div id="app">
    <div id="div1">
      <CounterWorld :message="parentMessage"  @response="(msg) => childMessage = msg" > slot message: {{ parentMessage }}</CounterWorld>
      {{ childMessage }}
    </div>
    <div id="div2">  
      <BuiltinComponents :ref="child"></BuiltinComponents>
      <input >
      <EventsComponentVue></EventsComponentVue>
    </div>
  </div> -->
  <div>
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import BuiltinComponents from './components/builtinComponents.vue';
// import CounterWorld from './components/CounterWorld.vue'
// import EventsComponentVue from './components/EventsComponent.vue';
// import SignUpVue from './components/SignUp.vue'
// import {  } from "./router";

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // CounterWorld,
    // BuiltinComponents,
    // EventsComponentVue,
    // SignUpVue,
    // RouterView
},
//   data(){
//     return{
//       parentMessage: "hello from parent",
//       childMessage: "No message is returned"
//     }
//   },
//   created(){
//     console.log("creted", this.parentMessage);
//   },
//   mounted(){
//     console.log("mounted", this.parentMessage);
//     console.log(this.$refs.child)
//   }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#div2 {
  float: right;
  display: inline;

}
#div1 {
  float: left;
  display: inline;
}
</style>

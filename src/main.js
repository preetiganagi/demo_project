import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store/store';


createApp(App).use(router).use(store).mount('#app')
// app.use(store)

// new Vue({
//     el: '#app',
//     store: store,
//     router: router,
//     render: h => h(App)
//   })

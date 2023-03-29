import HomeVue from "./views/Home.vue";
import SignUp from "./views/SignUp.vue"
import LoginVue from "./views/Login.vue"

import AddResto from "./views/AddResto.vue"

import UpdateResto from "./views/UpdateResto.vue"
import MenuList from "./views/MenuList.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: "Home",
        component: HomeVue,
        path: "/",
        meta: { requiresAuth: false }

    },
    {
        name: "SignUp",
        component: SignUp,
        path:"/sign-up"
    },
    {
        name:"Login",
        component: LoginVue,
        path:"/login"
    },
    {
        name:"AddResto",
        component: AddResto,
        path:"/add-resto"
    },
    {
        name:"UpdateResto",
        component: UpdateResto,
        // beforeEnter: (to, from) => {
        //     // reject the navigation
        //     // return false
        //   },
        path:"/update-resto/:id"
    },
    {
        name:"MenuList",
        component: MenuList,
        path:"/menu-list/:id"
    },

];

const router = createRouter({
    history : createWebHistory(), // 
    routes
});

// router.beforeEach((to, from) => {
//     // ...
//     // explicitly return false to cancel the navigation
//     return false
//   })
// router.beforeEach(async (to) => {
//     if (
//       to.name !== 'Login' && !localStorage.getItem('user-info')
//     ) {
//       // redirect the user to the login page
//       return { name: 'Login' } 
//     }
//     // if  next({ name: 'Login' })
//     // else if (to.name !== 'SignUp' && !localStorage.getItem('user-info')) 
//     // else next()

//     // if (to.name !== 'Login' && !localStorage.getItem('user-info')) {
//     //     next({ name: 'Login' }) 
//     // } else if((to.name !== 'SignUp' && !localStorage.getItem('user-info')) ){
//     //     next({ name: 'SignUp' }) 
//     // } else {
//     //     next()
//     // }

//   })
  
export default router;
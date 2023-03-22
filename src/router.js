import HomeVue from "./views/Home.vue";
import SignUp from "./views/SignUp.vue"
import LoginVue from "./views/Login.vue"

import AddResto from "./views/AddResto.vue"

import UpdateResto from "./views/UpdateResto.vue"

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: "Home",
        component: HomeVue,
        path: "/"
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
        path:"/update-resto/:id"
    },

];

const router = createRouter({
    history : createWebHistory(), // 
    routes
});

export default router;
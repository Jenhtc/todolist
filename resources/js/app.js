// app.js

require("./bootstrap");

window.Vue = require("vue");

import VueRouter from "vue-router";
Vue.use(VueRouter);

import VueAxios from "vue-axios";
import axios from "axios";

import App from "./App.vue";
Vue.use(VueAxios, axios);

import HomeComponent from "./components/HomeComponent.vue";
import CreateComponent from "./components/CreateComponent.vue";
import IndexComponent from "./components/IndexComponent.vue";
import EditComponent from "./components/EditComponent.vue";

/* import Login from "/home/becode/Documents/Exercices BeCode/Laravel-projects/todolist/todo/app/Http/Controllers/auth/LoginController.php";
import Register from "app/Http/Controllers/auth/RegisterController.php";
import Logout from "app/Http/Controllers/auth/LogoutController.php";
 */
const routes = [
    {
        name: "home",
        path: "/",
        component: HomeComponent
    },
    {
        name: "create",
        path: "/create",
        component: CreateComponent
    },
    {
        name: "posts",
        path: "/posts",
        component: IndexComponent
    },
    {
        name: "edit",
        path: "/edit/:id",
        component: EditComponent
    } /* ,
    {
        name: "login",
        path: "/login",
        component: Login
    },
    {
        name: "register",
        path: "/register",
        component: Register
    },
    {
        name: "logout",
        path: "/logout",
        component: Logout 
    }*/
];

const router = new VueRouter({ mode: "history", routes: routes });
const app = new Vue(Vue.util.extend({ router }, App)).$mount("#todo");

import { createRouter, createWebHistory } from 'vue-router';

import login from '../components/login/login.vue';
import signup from "../components/login/Signup.vue";

const routes = [
    { path: '/login', component: login },
    { path: '/signup', component: signup },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

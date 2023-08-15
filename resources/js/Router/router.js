import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/Home.vue';//change the destination
import About from '../components/About.vue';//change the destination

const routes = [
    //{ path: '/login', component: Login },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

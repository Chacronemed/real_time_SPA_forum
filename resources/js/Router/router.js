import { createRouter, createWebHistory } from 'vue-router';

import login from '../components/login/login.vue';

const routes = [
    { path: '/login', component: login },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
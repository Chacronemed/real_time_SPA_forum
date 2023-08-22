import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/login', component: () => import('../components/login/login.vue') },
    { path: '/signup', component: () => import('../components/login/Signup.vue') },
    { path: '/forum', component: () => import('../components/forum/Forum.vue'), name: 'forum' },
    { path: '/ask', component: () => import('../components/forum/create.vue') },
    { path: '/question/:slug', component: () => import('../components/forum/read.vue'), name: 'read' },
    { path: '/category', component: () => import('../components/Categories/createCategory.vue') },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

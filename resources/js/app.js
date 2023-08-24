import { createApp } from 'vue';
import App from './components/AppHome.vue';
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import hljs from 'highlight.js';
import axios from 'axios'; // Import Axios here

VMdEditor.use(githubTheme, {
    Hljs: hljs,
});

import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import router from './Router/router';

const vuetify = createVuetify({
    components,
    directives,
});

const app = createApp(App);

app.use(router);
app.use(VMdEditor);
app.use(vuetify).mount('#app');

// Set up Axios interceptor here
axios.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

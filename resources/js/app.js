import { createApp } from 'vue'
import App from './components/AppHome.vue'

//markdown editor
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js';

VMdEditor.use(githubTheme, {
    Hljs: hljs,
});

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import router from './Router/router';

const vuetify = createVuetify({
    components,
    directives
})

const app = createApp(App);

// Use the router instance to enable routing in your app
app.use(router);
//use the markdown
app.use(VMdEditor);

// Use Vuetify and mount the app
app.use(vuetify).mount('#app');

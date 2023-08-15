import { createApp } from 'vue'
import App from './components/AppHome.vue'

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

// Use Vuetify and mount the app
app.use(vuetify).mount('#app');

// Vue

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import './assets/main/main.css';

// Vue SPA (single page application)
const app = createApp(App)

// initialize app with plugins
app.use(router)

// mount app in index.html
app.mount('#app')

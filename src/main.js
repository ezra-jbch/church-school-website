// Vue
import 'bootstrap/dist/css/bootstrap.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// PrimeVue
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import 'primeicons/primeicons.css'
/* import 'primevue/resources/primevue.min.css' */


// PrimeVue components (import more components here as you see fit)
import DataTable from 'primevue/datatable'

// Vue SPA (single page application)
const app = createApp(App)

// initialize app with plugins
app.use(router)
app.use(PrimeVue)

// add PrimeView components (add more components here as you see fit)
app.component("DataTable", DataTable)

// mount app in index.html
app.mount('#app')
import 'bootstrap/dist/js/bootstrap.js';

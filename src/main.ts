import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../node_modules/sanitize.css'

createApp(App).use(router).mount('#app')
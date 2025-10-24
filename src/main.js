import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)   // ✅ first build app instance
app.use(router)              // ✅ use router
app.mount('#app')            // ✅ then mount

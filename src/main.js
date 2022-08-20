import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap"
import './assets/main.scss'
import 'vue-next-select/dist/index.min.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

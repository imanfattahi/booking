import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';

import "bootstrap"
import './assets/main.scss'

// Create Axios client
const $http = axios.create({
  baseURL: 'http://127.0.0.1:3000',
  headers: {}
});

const app = createApp(App)

// global properties
app.config.globalProperties.$http = $http
store.$http = $http

app
  .use(router)
  .use(store)

app.mount('#app')

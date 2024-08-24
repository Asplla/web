import './assets/main.css'
import './assets/wxhub.css'

import { createApp } from 'vue'
import TDesign from 'tdesign-vue-next';
import axios from 'axios'
import { createPinia } from 'pinia'

import App from './App.vue'

// 引入组件库的少量全局样式变量
import 'tdesign-vue-next/es/style/index.css';

import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(TDesign);
app.use(axios)
app.use(router)

app.mount('#app')

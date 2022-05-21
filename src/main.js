import { createApp } from 'vue'
import App from './App.vue'

import 'normalize.css'

import router from 'router/router'
import store from 'store/main'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import showme from 'common/plugins/test'


const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(store)
app.use(showme)
app.mount('#app')

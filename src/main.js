import { createApp } from 'vue'
import App from './App.vue'

import 'normalize.css'

import router from 'router/router'
import store from 'store/main'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import showme from 'common/plugins/test'
import getScore from 'common/plugins/getScore'
import { timeFormate } from 'common/utils'



const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(store)
app.use(showme)

app.config.globalProperties.$filter = getScore
app.config.globalProperties.$timer = timeFormate
app.mount('#app')

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import service from '@/service'
import components from '@/components'
import utils from '@/utils'
import naive from 'naive-ui'
import '@/styles/index.less'
import 'normalize.css'

// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

const app = createApp(App)
app.use(store).use(service).use(components).use(router).use(utils).use(naive)

app.mount('#app')

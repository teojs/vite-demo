import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import service from '@/service'
import components from '@/components'
import utils from '@/utils'
import '@/styles/index.less'

const app = createApp(App)
app.use(store).use(service).use(components).use(router).use(utils)

app.mount('#app')

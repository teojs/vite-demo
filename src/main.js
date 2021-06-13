import { createApp, defineAsyncComponent } from 'vue'
import App from '@/App.vue'
// import router from './router'
import store from '@/store'
import service from '@/service'
// import utils from '@/utils'
import components from '@/components'

const app = createApp(App)
app.use(store).use(service).use(components)
// .use(router)
// .use(utils)

app.mount('#app')

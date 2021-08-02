import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import Home from '@/views/Home.vue'
import NotFound from '@/views/404.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      name: 'Home',
      path: '/',
      redirect: '/index',
      component: Home,
      children: routes,
    },
    {
      name: 'NotFound',
      path: '/:pathMatch(.*)*',
      component: NotFound,
      meta: {
        title: '页面不存在',
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const title = to.meta.title ? to.meta.title + ' - 项目名称' : '项目名称'
  document.title = title
  next()
})

export default router

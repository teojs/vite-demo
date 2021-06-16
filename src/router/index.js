import { createRouter, createWebHistory } from 'vue-router'
// import { defineAsyncComponent } from 'vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
]

// ↓自动注册路由↓
const pages = import.meta.glob('/src/pages/**/*.vue')
for (const path in pages) {
  pages[path]().then((mod) => {
    console.log(path, mod.default)
  })
  // app.component(
  //   path.match(/\.\/(.+?)\.vue/)[1],
  //   defineAsyncComponent(components[path])
  // )
}
// ↑自动注册路由↑

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})
console.log(router)
export default router

import { defineAsyncComponent } from 'vue'
import _ from 'lodash'

// ↓自动注册路由↓
const pages = import.meta.globEager('/src/pages/**/*.vue')
const pagesObj = {}
for (const path in pages) {
  const mod = pages[path]
  const key = path
    .replace('/src/pages/', '')
    .replace('.vue', '')
    .replace('/', '.')
  _.set(pagesObj, key, {
    component: defineAsyncComponent(mod),
  })
}
// ↑自动注册路由↑

console.log(pagesObj)

const routes = []
const formatRoute = (routes, obj) => {
  for (const key in obj) {
    const component = obj[key].component
    if (key === 'component') {
      routes.push({
        name: component.name,
        path: key,
      })
    } else {
      formatRoute(routes, obj[key])
    }
  }
}
formatRoute(routes, pagesObj)

export default [
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

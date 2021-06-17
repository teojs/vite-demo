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
    .replace(/\//g, '.')
  _.set(pagesObj, key, {
    component: mod.default,
  })
}

const routes = []
const formatRoute = (routes, obj, parentKey) => {
  const route = {
    name: parentKey,
    component: obj.component,
    path: `/${parentKey}`,
    children: [],
    ...obj.component.routeInfo,
  }
  routes.push(route)
  for (const key in obj) {
    if (key !== 'component') {
      formatRoute(route.children, obj[key], `${parentKey}/${key}`)
    }
  }
}
for (const key in pagesObj) {
  formatRoute(routes, pagesObj[key], key)
}

// ↑自动注册路由↑

export default routes

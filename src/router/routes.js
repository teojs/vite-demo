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
    filePath: path,
  })
}

const routes = []
const formatRoute = (routes, page, parentKey) => {
  let route
  if (page.index) {
    route = {
      name: parentKey,
      component: page.index.component,
      path: `/${parentKey}`,
      children: [],
    }
    route = { ...route, ...page.index.component?.routeInfo }
    routes.push(route)
    for (const key in page) {
      if (!['component', 'index'].includes(key)) {
        formatRoute(
          route.children,
          page[key],
          `${parentKey}/${key.replace('_', ':')}`
        )
      }
    }
    return
  }
  if (!page.component) {
    for (const key in page) {
      formatRoute(routes, page[key], `${parentKey}/${key.replace('_', ':')}`)
    }
    return
  }
  route = {
    name: parentKey,
    component: page.component,
    path: `/${parentKey}`,
    ...page.component?.routeInfo,
  }

  routes.push(route)
}
for (const key in pagesObj) {
  formatRoute(routes, pagesObj[key], key)
}
// ↑自动注册路由↑

export default routes

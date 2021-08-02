/*
  一个loading插件，用于接口请求时自动显示loading
*/

import { Spinner } from 'spin.js'
import 'spin.js/spin.css'

export default options => {
  options = {
    el: document.body,
    foreground: 'gray',
    background: 'rgba(255, 255, 255, .5)',
    lines: 12,
    scale: 0.5,
    ...options,
  }

  const { position, pointerEvents } = window.getComputedStyle(options.el)
  if (position === 'static') {
    options.el.style.position = 'relative'
  }
  options.el.style.pointerEvents = 'none'
  options.el.style.borderColor = 'transparent'
  const loading = document.createElement('div')
  loading.style.position = 'absolute'
  loading.style.width = '100%'
  loading.style.height = '100%'
  loading.style.top = 0
  loading.style.left = 0
  loading.style.backdropFilter = 'blur(5px)'
  loading.style.background = options.background
  loading.style.zIndex = 9999

  new Spinner({
    color: options.foreground,
    lines: options.lines,
    scale: options.scale,
  }).spin(loading)
  options.el.appendChild(loading)

  return {
    close() {
      options.style.pointerEvents = pointerEvents || ''
      options.style.position = position || ''
      options.removeChild(loading)
    },
  }
}

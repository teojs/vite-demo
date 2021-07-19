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
  const dom = document.createElement('div')
  dom.style.position = 'absolute'
  dom.style.width = '100%'
  dom.style.height = '100%'
  dom.style.top = 0
  dom.style.left = 0
  dom.style.backdropFilter = 'blur(5px)'
  dom.style.background = options.background
  dom.style.zIndex = 9999

  new Spinner({
    color: options.foreground,
    lines: options.lines,
    scale: options.scale,
  }).spin(dom)
  options.el.appendChild(dom)

  return {
    close() {
      options.style.pointerEvents = pointerEvents
      options.style.position = position
      options.removeChild(dom)
    },
  }
}

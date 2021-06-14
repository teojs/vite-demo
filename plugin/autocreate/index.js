const fs = require('fs')
const path = require('path')

module.exports = () => {
  if (process.env.NODE_ENV === 'development') {
    // 自动写入api模板
    const apisPath = path.join(process.cwd(), 'src/service/apis')
    fs.watch(apisPath, { recursive: true }, (eventType, filename) => {
      const filePath = path.join(apisPath, filename)
      if (eventType === 'rename') {
        if (
          fs.existsSync(filePath) &&
          fs.statSync(filePath).isFile() &&
          filename.includes('.js')
        ) {
          setTimeout(() => {
            const file = fs.readFileSync(filePath, {
              encoding: 'utf-8',
            })
            const template = fs.readFileSync(path.join(__dirname, './tpl.js'), {
              encoding: 'utf-8',
            })
            if (!file) {
              const apiName = filename
                .split('\\')
                .join('.')
                .replace('.js', '')
              fs.writeFileSync(
                filePath,
                template.replace(/api name here/g, `this.$api.${apiName}`)
              )
            }
          }, 500)
        }
      }
    })

    // 自动写入 .vue 模板
    const viewsPath = path.join(process.cwd(), 'src')
    fs.watch(viewsPath, { recursive: true }, (eventType, filename) => {
      if (
        eventType === 'rename' &&
        fs.existsSync(path.join(viewsPath, filename)) &&
        fs.statSync(path.join(viewsPath, filename)).isFile() &&
        filename.includes('.vue')
      ) {
        setTimeout(() => {
          // 自动写入模板
          const file = fs.readFileSync(path.join(viewsPath, filename), {
            encoding: 'utf-8',
          })
          const template = fs.readFileSync(path.join(__dirname, './tpl.vue'), {
            encoding: 'utf-8',
          })
          if (!file) {
            const componentName = filename
              .split('\\')
              .map(o => o.replace(/^\S/, s => s.toUpperCase()))
              .join('')
              .replace('.vue', '')
            fs.writeFileSync(
              path.join(viewsPath, filename),
              template.replace(/component name here/g, componentName)
            )
          }
        }, 500)
      }
    })
  }
}

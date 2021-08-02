const fs = require('fs')
const path = require('path')
const packagePath = path.join(process.cwd(), 'package.json')
const packageContent = require(packagePath)

// 自动升级版本号
const newVersion = packageContent.version.split('.')
newVersion[2]++
packageContent.version = newVersion.join('.')

fs.writeFileSync(packagePath, JSON.stringify(packageContent, null, 2) + '\n')

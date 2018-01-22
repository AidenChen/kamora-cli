require('colors')
const fs = require('fs')
const childProcess = require('child_process')

const KAMORA_STARTER = 'https://github.com/AidenChen/kamora-starter.git'

module.exports = (name) => {

  // 下载项目
  childProcess.execSync(`git clone ${KAMORA_STARTER} ${name}`)

  // 更新 package.json
  console.log('更新 package.json ......'.grey)
  let packageJson = fs.readFileSync(`./${name}/package.json`, {
    encoding: 'utf8'
  })
  packageJson = JSON.parse(packageJson)
  packageJson.name = name
  fs.writeFileSync(`./${name}/package.json`, JSON.stringify(packageJson, null, '  '))

  // 清空 .git
  childProcess.execSync(`rm -rf ./${name}/.git`)

  console.log(`${name} 创建成功`.green)
}

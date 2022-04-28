import nunjucks from 'nunjucks'
import fs from 'fs'
import * as timeline from './scripts/timeline.js'

const ELEMENTS = JSON.parse(fs.readFileSync('./Periodic-Table-JSON/PeriodicTableJSON.json')).elements
const YEAR = new Date().getFullYear()

clean()
createFolder("./dist/css")
createFolder("./dist/scripts")
createMain()
create404()
copyFolderContents('fonts')
copyFile("favicon.ico")
copyFile("scripts/main.js")


function clean() {
  if (fs.existsSync("./dist")){
    fs.rmSync("./dist", { recursive: true, force: true })
  }
}

function createFolder(path) {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true })
  }
}

function copyFolderContents(folder) {
  let src = `./src/${folder}`
  let dist = `./dist/${folder}`

  createFolder(dist)

  const dir = fs.opendirSync(src)
  let file
  while((file = dir.readSync())) {
    let name = file?.name
    fs.copyFileSync(`${src}/${name}`, `${dist}/${name}`)
    console.log(`Copied ${name}`)
  }
  dir.closeSync()
}

function create404() {
  let render = nunjucks.render(`./src/pages/404.njk`, {
    title: "404",
    year: YEAR
  })

  fs.writeFileSync('./dist/404.html', render)
  console.log('Compiled 404')
}

function createMain() {
  let render = nunjucks.render(`./src/pages/main.njk`, {
    elements: ELEMENTS,
    t: timeline,
    year: YEAR
  })

  fs.writeFileSync('./dist/index.html', render)
  console.log('Compiled main')
}

function copyFile(file) {
  fs.copyFileSync(`./src/${file}`, `./dist/${file}`)
  console.log(`Copied ${file}`) 
}
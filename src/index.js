import nunjucks from 'nunjucks'
import fs from 'fs'
import * as timeline from './scripts/timeline.js'

const ELEMENTS = JSON.parse(fs.readFileSync('./src/data/PeriodicTableJSON.json')).elements
const YEAR = new Date().getFullYear()

clean()
createMain()
create404()
copyFolderContents('css')
copyFolderContents('fonts')
copyFile("favicon.ico")


function clean() {
  if (!fs.existsSync("./dist")){
    fs.rmSync("./dist", { recursive: true, force: true })
  }
}


function copyFolderContents(folder) {
  let src = `./src/${folder}`
  let dist = `./dist/${folder}`

  if (!fs.existsSync(dist)) {
    fs.mkdirSync(dist, { recursive: true })
  }

  const dir = fs.opendirSync(src)
  let file
  while((file = dir.readSync())) {
    let name = file?.name
    fs.copyFile(`${src}/${name}`, `${dist}/${name}`, (err) => {
      if (err) throw err
      console.log(`Copied ${name}`)
    })
  }
  dir.closeSync()
}


function create404() {
  let render = nunjucks.render(`./src/pages/404.njk`, {
    title: "404",
    year: YEAR
  })

  fs.writeFile('./dist/404.html', render, (err) => {
    if (err) throw err
    console.log('Compiled 404')
  })
}


function createMain() {
  let render = nunjucks.render(`./src/pages/main.njk`, {
    elements: ELEMENTS,
    tl: timeline,
    year: YEAR
  })

  fs.writeFile('./dist/index.html', render, (err) => {
    if (err) throw err
    console.log('Compiled main')
  })
}

function copyFile(file) {
  fs.copyFile(`./src/${file}`, `./dist/${file}`, (err) => {
    if (err) throw err
    console.log(`Copied ${file}`) 
  })
}
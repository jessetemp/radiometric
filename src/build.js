import nunjucks from 'nunjucks'
import fs from 'fs'
import * as timeline from './scripts/timeline.js'

const ELEMENTS = JSON.parse(fs.readFileSync('./Periodic-Table-JSON/PeriodicTableJSON.json')).elements
const YEAR = new Date().getFullYear()


clean()
createFolders(["css", "scripts", "fonts", "data"])
createMain()
create404()
copyFile("favicon.ico")
copyFile('fonts/merriweather-v28-latin-regular.woff')
copyFile("scripts/main.js")
// copyFile("../periodic-table-words/words-with-4-symbols.txt", "data/words.txt")
createShuffledWordList("./periodic-table-words/words-with-4-symbols.txt", "./dist/data/words.txt")


function clean() {
  if (fs.existsSync("./dist")){
    fs.rmSync("./dist", { recursive: true, force: true })
  }
}

function createFolders(paths) {
  paths.forEach((path) => {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(`./dist/${path}`, { recursive: true })
    }
  })
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

function copyFile(srcFile, distFile=srcFile) {
  fs.copyFileSync(`./src/${srcFile}`, `./dist/${distFile}`)
  console.log(`Copied ${srcFile} to ${distFile}`) 
}

function createShuffledWordList(srcFile, distFile) {
  let words = fs.readFileSync(srcFile, 'utf8').toString().split('\n')
  
  let seed = 1
  for (let i = words.length - 1; i > 0; i--) {
    let random = Math.sin(seed++) * 10000
    random -= Math.floor(random)
    const j = Math.floor(random * (i + 1));
    [words[i], words[j]] = [words[j], words[i]];
  }
  let file = fs.createWriteStream(distFile)
  file.on('error', (err) => {
    console.log(err)
  })
  words.forEach((word) => {
    file.write(word + '\n')
  })
  file.end()
}
